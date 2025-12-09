const express = require('express');

const app=express();

app.use("/",(err,req,res,next)=>{
    res.status(500).send("something went wrong")
})
app.get("/getuserdata",(req,res)=>{
    
    // try{
        //logic of DB call and get user Data
        throw new Error("random error generating")
        res.send("User data sent")

    // }catch(err){
    //     res.status(500).send("Something went wrong. contact support team")
    // }
})
app.use("/",(err,req,res,next)=>{
    res.status(500).send("something went wrong")
})

app.listen(3000,()=>{
    console.log("server is successfully listening on port  3000")
});
