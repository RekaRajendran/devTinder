const express = require('express');

const app=express();
const connectDB=require("../config/database")
const User=require("./models/user")
app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User({
    firstName: "reka",
    lastName: "rajendran",
    emailId: "reka1901@gmail.com",
    password: "123456",
  });

  try {
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB().then(()=>{
        console.log("Database connection established..")
        app.listen(3000,()=>{
            console.log("server is successfully listening on port  3000")
        });
    })
    .catch((err)=>{
        console.log("Database cannot be connected!!!")
    })

