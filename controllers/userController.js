const userModel=require("../models/userModel")
const fs=require('fs')
const getUserController=async (req,resp)=>{
    try{
        const user=await userModel.find({})
        resp.status(200).send({
            success:true,
            total:user.length,
            message:"All Users",
            user,
        })
    }
    catch(error){
        resp.status(500).send({
            success:false,
            message:"Error in getting users",
            error:error.message
        })
    }
}
module.exports=getUserController