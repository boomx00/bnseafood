const app = require('express').Router();
const userRoutes = require('./userRoutes')
const tokenRoutes = require('./tokenRoutes')
const supplierRoutes = require('./supplierRoutes')
const customerRoutes = require('./customerRoutes')
//  Routes
app.use('/user', userRoutes);
app.use('/token', tokenRoutes);
app.use('/customer', customerRoutes)
app.use('/contact', contactRoutes)

// app.get("/test",(req,res)=>{
//     res.end("hello world")
//   } )
module.exports = app;