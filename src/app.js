const express = require('express');

const app=express();
//Request handler
app.use("/",(req,res)=>{
    res.send("Hello from the dashboard")
})
app.use("/hello",(req,res)=>{
    res.send("hello hello hello")
})
app.use("/test",(req,res)=>{
    res.send("Hello from the server")
})
app.listen(3000,()=>{
    console.log("server is successfully listening on port 300")
});
