const mongoose = require("mongoose");
const validator=require("validator");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required:true,
    minLength:3,
    maxLength:50,
    trim:true
  },
  lastName: {
    type: String,    
    trim:true
  },
  emailId: {
    type: String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true,
     validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid email address:"+value)
      }
     }
  },
  password: {
    type: String,
    required:true,
    validate(value){
      if(!validator.isStrongPassword(value,{
        minLength:8,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
      })){
        throw new Error("Password is not strong enough")
      }
    }
  },
  age: {
    type: Number,
    min:18
  },
  gender: {
    type: String,
    validate(value){
      if(!["male","female","other"].includes(value.toLowerCase())){
        throw new Error("Gender data is invalid")
      }
    }
  },
  photoUrl:{
    type:String,
    default:"https://toppng.com//public/uploads/preview/donna-picarro-dummy-avatar-115633298255iautrofxa.png",
     validate(value){
      if(!validator.isURL(value)){
        throw new Error("Invalid photo URL:"+value)
      }
     }
  },
  about:{
    type:String,
    minLength:3,
    maxLength:500,
    default:"This is a default about of the user"
  },
  skills:{
    type:[String]
  }
  
},
{
  timestamps:true
}
);

module.exports = mongoose.model("User", userSchema);