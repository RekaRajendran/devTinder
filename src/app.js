const express = require('express');

const app=express();
const connectDB=require("../config/database")
const User=require("./models/user")
app.use(express.json());
//Signup route
app.post("/signup", async (req, res) => {
  console.log(req.body);
  // Creating a new instance of the User model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});
//Get user by emailid
app.get("/user",async(req,res)=>{
  try{
    const userEmail=req.body.emailId;
    console.log(userEmail)
     const users= await User.findOne({emailId:userEmail})
   //  const users=await User.findById("694396693273ce9068d7d296");
    if(!users){
      res.status(404).send("NO user found with emailid:"+userEmail)
    }else{
      res.send(users);
    }

    // const users= await User.find({emailId:userEmail})
    // console.log(users.length)
    // if(users.length===0){
    //   res.status(404).send("NO user found with emailid:"+userEmail)
    // }else{
    //   res.send(users);
    // }
  }catch(err){
    res.status(400).send("Error fetching the user:"+err.message)
  }
})
//Get all users
app.get("/feed",async(req,res)=>{
  try{
  
    const users=await User.find();
    if(users.length===0){
      res.status(404).send("NO user found with emailid:"+userEmail)
    }else{
      res.send(users);
    }
  }catch(err){
    res.status(400).send("Error fetching users:"+err.message)
  }

})
connectDB().then(()=>{
        console.log("Database connection established..")
        app.listen(3000,()=>{
            console.log("server is successfully listening on port  3000")
        });
    })
    .catch((err)=>{
        console.log("Database cannot be connected!!!")
    })


    
