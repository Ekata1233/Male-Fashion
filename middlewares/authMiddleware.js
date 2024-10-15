const JWT=require('jsonwebtoken')
const userModel = require('../models/userModel')
const requireSignIn=(req,resp,next)=>{
    try{
        const decode=JWT.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode
        next()
    }catch(error){
        console.log(error)
    }
}

const isAdmin=async(req,resp,next)=>{
    try{
        const user=await userModel.findById(req.user._id)
        if(user.role!==1){
            resp.status(401).send({
                success:false,
                message:"Not an authoeised user"
            })
        }
        else{
            next()
        }
    }
    catch(error){
        console.log(error)
    }
}
module.exports={requireSignIn,isAdmin}