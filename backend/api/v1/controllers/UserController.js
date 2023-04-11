require('dotenv').config()

const UserService = require('../services/UserService');

class UserController {
  //  Handle local register
  async createUser(req, res, next) {
    try {
      const result = await UserService.createUser(req.body);
      if (result == "USER_CREATE_SUCCESSFULL") {
        res.status(201).send({
          'status': 'REGISTER_SUCCESS',
          'msg': 'Successfully register a new account.'
        })
      }
    }
    catch (err) {
      if (err.code == "ER_DUP_ENTRY") {
        res.status(500).send({
          'status': 'REGISTER_FAILED',
          'msg': 'Failed to register a new account, account already exists',
          'err': err
        })
      } else {
        res.status(500).send({
          'status': 'REGISTER_FAILED',
          'msg': 'Failed to register a new account.',
          'err': err
        })
      }
    }
  }

  // Handle local login
  async userLogin(req, res, next) {
    try {

      const result = await UserService.userLogin(req.body.email, req.body.password);
      if (result == "WRONG_PASSWORD") {
        res.status(401).send({
          'status': 'LOGIN_FAILED',
          'msg': 'Failed to login, password is incorrect please try again.'
        })
      } else if (result == "USER_NOT_EXISTS") {
        res.status(401).send({
          'status': 'LOGIN_FAILED',
          'msg': 'Failed to login, email is not exists please try again.'
        })
      } else {
        res.cookie('refreshToken', result.refreshToken,{
          httpOnly: true,
          maxAge:24 * 60 * 60 * 1000
        })
        res.cookie('accessToken', result.accessToken,{
          httpOnly:true,
          maxAge: 24 * 60 * 60 * 1000
        })
        res.status(201).send({
          'status': 'LOGIN_SUCCESS',
          'msg': 'Successfully login, token provided.',
          'user_id': result.userId
        })
        console.log("logged in")
      }
    } catch (err) {
      res.status(500).send({
        'status': 'LOGIN_FAILED',
        'msg': 'Login failed, server error.',
        'err': err
      })
    }
  }

  async userLogout(req,res){
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken) return res.sendStatus(204)
    try{
      // console.log("a")

      const result = await UserService.userLogout(req.body.data, refreshToken)
      console.log(result)
      if(result == "LOGOUT SUCCESS"){
        res.clearCookie('refreshToken')
        res.clearCookie('accessToken')
  
        res.status(200).send({
          'status': 'LOGOUT_SUCCESS',
          'msg': 'Successfully LOGOUT.',
        })
      }
    }catch(err){
      console.log(err)
    }
   
  }

 
}

module.exports = new UserController();