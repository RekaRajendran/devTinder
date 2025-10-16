const express = require('express');

const app=express();
//Request handler
//This will only handle GET call to user
app.get("/user",(req,res)=>{
    res.send({firstName:"Reka",lastName:"Mari"})
});
app.post("/user",(req,res)=>{
    res.send("Data successfully saved to the database")
});
app.delete("/user",(req,res)=>{
    res.send("Detled successfully ")
});
//This will match all the HTTP method API calls to /test
app.use("/test",(req,res)=>{
    res.send("Hello from the server - test")
})


app.listen(3000,()=>{
    console.log("server is successfully listening on port  3000")
});
