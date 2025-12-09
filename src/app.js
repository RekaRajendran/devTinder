const express = require('express');

const app=express();
const {adminAuth,userAuth}=require("./middlewares/auth");
//Handle Auth Middleware for all GET, POST, ...requests
app.post("/user/login",userAuth,(req,res)=>{
    res.send("User logged in successfully")
})
app.get("/user/getdata",userAuth,(req,res)=>{
    res.send("User Data sent")
}) 
app.use("/admin",adminAuth) 
app.get("/admin/getAllData",(req,res)=>{
    // const token=req.boby?.token;
     res.send("All data sent")      
})
app.get("/admin/deleteUser",(req,res)=>{   
     res.send("Deleted a user")   
})

app.listen(3000,()=>{
    console.log("server is successfully listening on port  3000")
});
