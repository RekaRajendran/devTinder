const express = require('express');

const app=express();
//Request handler
//This will only handle GET call to user
//app.use("routhe",rH1,rH2,rH3,rH4)
app.use("/user",[
    (req,res,next)=>{
        //Route handler   
        console.log("Handling the route user!");
        //res.send("Response !!") 
        next();
    },
    (req,res,next)=>{
        //Route handler 2
        console.log(" Handling the route user 2")
      //  res.send("Response 2")
        next();
    },
     (req,res,next)=>{
        //Route handler 2
        console.log(" Handling the route user 3")
        // res.send("Response 3")
          next();
    },
     (req,res,next)=>{
        //Route handler 4
        console.log(" Handling the route user 4")
       res.send("Response 4")
    //    next();
    }
    
])

app.listen(3000,()=>{
    console.log("server is successfully listening on port  3000")
});
