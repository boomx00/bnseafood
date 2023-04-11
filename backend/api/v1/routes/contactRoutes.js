const app = require('express').Router();
const { token } = require('morgan');
const ContactController = require('../controllers/ContactController')
const TokenController = require('../controllers/TokenController');
const tokenVerifier = require('../middleware/tokenVerifier');

// Create a new local user
app.post("/create", ContactController.createContact);
// app.get("/get-all",tokenVerifier);
app.get("/get-all",tokenVerifier, ContactController.getAllContact);
app.get('/filter-contact',tokenVerifier, ContactController.filterContact)

module.exports = app;