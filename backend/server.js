const compression = require('compression');
const express = require("express");
const app = express();
const fs = require('fs');
const http = require('http')
const https =  require('https')
const PORT = process.env.PORT || 8000;
var cors = require('cors')
const mainRoutes = require('./api/v1/routes/index')
const cookieParser = require("cookie-parser");

app.use(compression());
// app.use(cors( {origin: 'http://localhost:3000',credentials: true}))
app.use(cors( {origin: 'https://dakoding.com',credentials: true}))

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// var https_options = {
//   key: fs.readFileSync("./ssl/exinergy_xyz.key", "utf-8"),
//   cert: fs.readFileSync("./ssl/exinergy_xyz.crt", "utf-8"),
//   ca: [
//     fs.readFileSync('./ssl/SSL-BUNDLE.crt', "utf-8"),
//     fs.readFileSync('./ssl/RootCA.crt', "utf-8")
//   ]
// }
// http.get('*', function(req, res) {  
//   res.redirect('https://' + req.headers.host + req.url);
// })
// Main Routes
app.use("/api/v1", mainRoutes,(req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// set port, listen for requests

// http.listen(8080);
// https.createServer(https_options, app).listen(3001);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});