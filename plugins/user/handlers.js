// REQUIREMENTS
const dbCrudMethods = require("../crudFuncs.js").executeDbMethods;
const db = require("../db/mongoDb/db");
const moment = require('moment');

// HANDLER'S DECLARAION
const createUser = async (request, h) => dbCrudMethods('user', 'create', request);
const findUser = async (request, h) => dbCrudMethods('user', 'find', request);
const findUserById = async (request, h) => dbCrudMethods('user', 'findById', request);
const updateUser = async (request, h) => dbCrudMethods('user', 'update', request);
const deleteUser = async (request, h) => dbCrudMethods('user', 'delete', request);

const getProfileInfo = async (_id) => {
    const Model = db.getModels()['user'];
    const records = await Model.findById({ _id }).populate("userType").populate("country").populate("gender").exec();
    return records;
};

const getUserProfile = async (request, h) => {
    const util = request.server.methods.utils;
    const _id = request.params.id;
    try {
       const records = await getProfileInfo(_id);
       return util.buildResponse("User's profile information",true,records);
    } catch(err) {
        console.log(err);
        return util.buildResponse(err);
    }
};

const login = async (request, h) => {
    const model = db.getModels()['user'];
    const util = request.server.methods.utils;
    let { user, password, expired } = request.params;
  
    try {
      const foundUser = await model.findOne({ email: user });
      expired = expired ? moment().add(2, 'weeks').unix() : moment().add(2, 'months').unix();
      if (foundUser) {
        const hashedPass = foundUser.password;
        const didMatch = await util.comparePassword(password, hashedPass)
        if (didMatch) {
          const _token = {
            _id: foundUser._id,
            name: foundUser.name,
            lastName: foundUser.lastName,
            email: foundUser.email,
            mobilePhone: foundUser.mobilePhone,
            homePhone: foundUser.homePhone,
            imageUrl: foundUser.imageUrl
          };
  
          const token = util.generateJWT(_token, request.server.methods.utils.getSecretKey(), expired);
  
          return util.buildResponse('Login', true, {
            token,
            expired,
            user: {
              ..._token,
            }
          });
        }
        return util.buildResponse('Incorrect username and / or password.', false, []);
      }
      return util.buildResponse('Incorrect username and / or password.', false, []);
    } catch (err) {
      console.log(err);
      return util.buildResponse(err, false, []);
    }  
};

const createUserAccount = async (request, h) => {
  let records = [], _records = null;
  const util = request.server.methods.utils;

  try {
      if (request.payload.password !== request.payload.reconfirmPassword)
        return util.buildResponse("Passwords do not match.",true,records);

      let userTypeObj = await db.getModels()["userType"].findOne({ name: "Common User" }).exec();
      let data = { 
        email: request.payload.email, 
        password: request.payload.password,
        active: true,
        userType: userTypeObj._id
      };

      data.password = await util.hashPassword(request.payload.password);
      _records = await db.getModels()["user"].create(data);

      if (_records){
        const expired = moment().add(2, 'months').unix();
        const token = util.generateJWT({ ...data, _id: _records._id }, request.server.methods.utils.getSecretKey(), expired);
        return util.buildResponse("Account created successfully.",true,{
          token,
          expired,
          user: {
            ..._records._doc,
          }
        });
      } else {
        return util.buildResponse("ERROR: creating account.",false,[]);
      }
  } catch(err) {
      console.log(err);
      return util.buildResponse(err);
  }
};

const changePassword = async (request) => {
  let { oldPwd, newPwd } = request.payload
  const models = db.getModels();
  const utils = request.server.methods.utils;
  const user = request.params.user;
  try {
    const foundUser = await models.user.findById(user);
    if (foundUser) {
      const hashedPass = foundUser.password;
      const didMatch = await util.comparePassword(oldPwd, hashedPass)
      if (didMatch) {
        oldPwd == newPwd || newPwd == foundUser.phone
          ? (() => { throw new Error('Failed => New password can"t be equal to [oldPassword,phone]') })()
          : true
        await foundUser.update({ password: await util.hashPassword(newPwd) })
        return utils.buildResponse('changePwd success', true, []);
      }
      throw new Error('Failed => wrong old password')
    }
    throw new Error('Failed => user not found')
  } catch (err) {
    console.log(err);
    return utils.buildResponse(err.message, false, []);
  }
};

module.exports = {
    createUser,
    findUser,
    findUserById,
    updateUser,
    deleteUser,
    login,
    getUserProfile,
    createUserAccount,
    changePassword
};