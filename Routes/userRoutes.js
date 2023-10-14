const express=require("express")
const auth = require('../Middelwar/auth');

const { register, login, deleteUser, getByIdAndEdit } = require("../Controllers/userController")
const { registerValidation, Validator } = require("../Middelwar/validator")
// require router
const router = express.Router()

 // add new product
 router.post('/register',registerValidation(),Validator,register)

// login
router.post('/login',login)

// delete
router.delete('/deleteUser/:_id',deleteUser)

// current
router.get('/current',auth,(req,res)=>{res.send(req.user)})

// Edit User
router.put('/editUser/:_id', getByIdAndEdit);

module.exports=router