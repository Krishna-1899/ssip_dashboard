const express = require('express');
const app= express();
//load configfrom env file
require("dotenv").config();

const PORT=process.env.PORT||4000;
//middle ware  to parse json middle body
app.use(express.json());
//import routes for todo api
const todoRoutes=require("./routes/todo");
//mount todo api routes
app.listen(PORT,()=>{
    console.log(`server started  at ${PORT}`);
})
//connnect to db 
const dbConnect=require("./config/database")
dbConnect();

//default route 
app.get("/",(req,res)=>{
    res.send(`<h1>This is home page </h1>`);
})
app.use("/api/v1",todoRoutes);
