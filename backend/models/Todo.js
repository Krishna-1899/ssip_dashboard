const mongoose = require("mongoose");
const todoSchema=new mongoose.Schema(
    {
        id:{
            type:Number,
            required:true,
            maxLength:50,
        },
        name:{
            type:String,
            required:true,
            maxLength:150,
        },
        description:{
            type:String,
            required:true,
            maxLength:500,
        },
        funds:{
            type:String,
            required:true,
            maxLength:50,
        },
        beneficiary:{
            type:String,
            required:true,
            maxLength:150,
        },
    }
);
module.exports=mongoose.model("dashboard_db",todoSchema);