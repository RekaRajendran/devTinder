const mongoose = require("mongoose");

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
    lowercase:true
  },
  password: {
    type: String,
    required:true
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