const app = require('express').Router();
const UserController = require('../controllers/UserController');
const verifyToken = require('../middleware/tokenVerifier');

// Create a new local user
app.post("/register", UserController.createUser);
// login
app.post("/login", UserController.userLogin);

// app.post('/logout',UserController.userLogout)
app.post('/logout', UserController.userLogout);
// edit user
// app.put("/edit-user", tokenVerifier,userVerifier,UserController.editUser);
// get user
// app.get('/get-own-user', verifyToken, UserController.getOwnUser);

module.exports = app;