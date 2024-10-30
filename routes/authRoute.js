const express=require('express')
const { registerController, loginController, testController, forgotPasswordController, updateProfileController } = require('../controllers/authController')
const {requireSignIn,isAdmin} = require('../middlewares/authMiddleware')
const router=express.Router()

router.post('/register',registerController)
router.post('/login',loginController)
router.post('/forgotPassword',forgotPasswordController)
router.get('/test',requireSignIn,isAdmin,testController)
router.get('/userauth',requireSignIn,(req,resp)=>{
    resp.status(200).send({
        ok:true
    })
})
router.get('/adminauth',requireSignIn,isAdmin,(req,resp)=>{
    resp.status(200).send({
        ok:true
    })
})
router.put('/profile',requireSignIn,updateProfileController)
module.exports=router