import mongoose from "mongoose";
 
const respberrySchema= new mongoose.Schema({
    ExperimentId:
    {
       type:Number,
       trim:true,
       required:true
    },
    ExperimentName:
    {
       type:String,
       trim:true,
       lowarcase:true,
       required:true,
       index:true
    },
    
    madeBy:{
     type:String,
     trim:true,
     lowarcase:true,
     required:true
    },
    madeByinfo:
    {
      type:String,
      trim:true,
      lowarcase:true,
      required:true
     },
    overview:
    {
       type:String,
       trim:true, 
       required:true
    },
    overviewinfo:
    {
       type:String,
       trim:true, 
       required:true
    },
    Material:
    {
       type:String,
       trim:true, 
       required:true
    },
    Material1:
    {
        type:String,
        trim:true, 
        
     },
     Material2:
     {
         type:String,
         trim:true, 
         
      },
      Material3:
      {
          type:String,
          
       },
       Material4:
      {
          type:String,
          
       },
       
    pinDiagramInfo:
    {
      type:String,
      trim:true,
       required:true
    },
    CircuitDiagramInfo:
    {
      type:String,
    trim:true,
       required:true
    }, 
    step1:
    {
       type:String,
       trim:true,
       
    },
    step2:
    {
       type:String,
       trim:true,
       
    },
    step3:
    {
       type:String,
       trim:true,
       
    },
    step4:
    {
       type:String,
       trim:true,
       
    },
    step5:
    {
       type:String,
       trim:true,
       
    },
    step6:
    {
       type:String,
       trim:true,
   
    },
    step7:
    {
       type:String,
       trim:true,
       
    },
    
    
    code:{
      type:String,
      required:true,
      trim:true
    },
    result:
    {
      type:String,
      trim:true,
      required:true
    },
    image1:{
      type:String,
       required:true
    },
    image2:{
      type:String,
       required:true
    },
    image3:{
      type:String,
       required:true
    },
     
    image4:{
      type:String,
       required:true
    }, 
    image5:{
      type:String,
      
    },
    
      
      
      

})

 

export const Respberry=mongoose.models.Respberry || mongoose.model("Respberry", respberrySchema)