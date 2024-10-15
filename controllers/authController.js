const { response } = require("express")
const userModel = require("../models/userModel")
const { hashPassword, comparePassword } = require("../helpers/authHelper")
const JWT=require('jsonwebtoken') 

const registerController= async (req,resp)=>{
    try{
        const {name,email,password,phone,address,answer}=req.body
        if(!name){
            return response.send({error:"Name is required"})
        }
        if(!email){
            return response.send({error:"Email is required"})
        }
        if(!password){
            return response.send({error:"Password is required"})
        }
        if(!phone){
            return response.send({error:"Phone is required"})
        }
        if(!address){
            return response.send({error:"Address is required"})
        }
        if(!answer){
            return response.send({error:"Answer is required"})
        }
        const existingUser=await userModel.findOne({email})
        if(existingUser){
            return resp.status(200).send({
                success:true,
                message:"Already registered Please Login"
            })
        }
        const hashedPassword=await hashPassword(password)
        const user= await new userModel({name,email,phone,address,answer,password:hashedPassword}).save()
        resp.status(201).send({
            success:true,
            message:"User registered successfully",
            user
        })
    }catch(error){
        console.log(error)
        response.status(500).send({
            success:false,
            message:"Error in Registration",
            error
        })
    }

}
const loginController=async(req,resp)=>{
    try{
        const{email,password}=req.body
        if(!email || !password){
            return resp.send ({error:"Invalid email or password"})
        }
        const user =await userModel.findOne({email})
        if(!user){
            resp.status(404).send({
                success:false,
                message:"Email is not registered",
                user
            })
        }
        const match=await comparePassword(password,user.password)
        if(!match){
            resp.status(404).send({
                success:false,
                message:"Invalid password",
                user
            })
        }
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'})
        resp.status(200).send({
            success:true,
            message:"Login Successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address  ,
                role:user.role              
            }, 
            token
        })

    }catch(error){
        console.log(error)
        response.status(500).send({
            success:false,
            message:"Error in Login",
            error})
    }
}
 const forgotPasswordController=async (req,resp)=>{
    try{
        const {email,answer,newPassword}=req.body
        if(!email)
        {
            resp.status(400).send({message:"Email is required"})
        }
        if(!newPassword)
        {
            resp.status(400).send({message:"Password is required"})

        }
        if(!answer)
            {
                resp.status(400).send({message:"Answer is required"})
    
            }
            const user=await userModel.findOne({email,answer})
            if(!user)
            {
                return resp.status(404).send({
                    success:false,
                    message:"Wrong Email or Answer"
                })
            }
            const hashed=await hashPassword(newPassword)
            await userModel.findByIdAndUpdate(user._id,{password:hashed})
            resp.status(200).send({
                success:true,
                message:"Password Reset Successfully"
            })
    }
    catch(error){
        console.log(error)
        response.status(500).send({
            success:false,
            message:"something went wrong",
            error})        
    }
 }

const testController=async (req,resp)=>{
    try{
        resp.send("Middleware tested")

    }catch(error){
        console.log(error)
    }
}
module.exports={registerController,loginController,testController,forgotPasswordController}
