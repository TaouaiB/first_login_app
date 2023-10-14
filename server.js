const express=require("express")
const connect = require("./connectDB")
// create instance
const app=express()
// midlware
app.use(express.json())  //teste le requiste de user  si  le elle passer ou nn et return le respense
// require dotnev
require('dotenv').config() 
 //connecting   to bd
 connect()
//create port
const PORT=process.env.PORT  
//create server
app.listen(PORT,(error)=>{
    error?
    console.log(error):
    console.log(`server in running on port ${PORT}`)
    
})
// require routes
app.use('/api/product',require('./Routes/productRoutes'))
app.use('/api/user',require('./Routes/userRoutes'))



