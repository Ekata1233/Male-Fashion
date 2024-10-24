const dealWeekModel=require ('../models/DealWeekModel')
const slugify=require('slugify')
const fs=require('fs')
const createDealController=async(req,resp)=>{
    try{
        const {title,price,days,hours,minutes,seconds}=req.fields
        const {photo}=req.files
        switch(true)
    {
        case !title:
            return resp.status(500).send({error:"Title is required"})
        case !price:
            return resp.status(500).send({error:"Price is required"})
        case !days:
            return resp.status(500).send({error:"days is required"})
        case !hours:
            return resp.status(500).send({error:"Hours is required"})
            
        case !minutes:
            return resp.status(500).send({error:"Minutes is required"})
        case !seconds:
            return resp.status(500).send({error:"Seconds is required"})
        case !photo && photo.size > 1000000:
            return resp.status(500).send({error:"Photo is required and should be less than 1Mb"})
    }
    const deal=new dealWeekModel({...req.fields,slug:slugify(title)})
    if(photo)
    {
        deal.photo.data=fs.readFileSync(photo.path)
        deal.photo.contentType=photo.type
    }
    await deal.save()
        resp.status(201).send({
            success:true,
            message:""
        })
    }catch(error){
        console.log(error)
    }
}

const getDealController=async (req,resp)=>{
    try{
     const deal=await dealWeekModel.find({}).select("-photo").limit(10).sort({createdAt:-1})
     resp.status(200).send({
         success:true,
         total:deal.length,
         message:"All deal",
         deal,
         
     })
    } catch(error){
     resp.status(500).send({
         success:false,
         message:"Error in getting deal",
         error:error.message
     })
    }
 }
 const getDealphotoController=async (req,resp)=>{
    try{
        const deal=await dealWeekModel.findById(req.params.pid).select("photo")
        if(deal.photo.data)
        {
            resp.set('Content-type',deal.photo.contentType)
            return resp.status(200).send(deal.photo.data)
        }
    } catch(error){
        resp.status(500).send({
            success:false,
            message:"Error getting deal Photo",
            error
        })
    }
}
module.exports={createDealController,getDealController,getDealphotoController}