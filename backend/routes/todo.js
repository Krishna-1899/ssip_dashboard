const express=require("express");
const router=express.Router();
//impoprt controller 
const {getTodo,getTodoById}=require("../controllers/getTodo");
//define api route
router.get("/getTodos",getTodo);

module.exports=router;  