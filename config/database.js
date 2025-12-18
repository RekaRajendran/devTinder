const mongoose=require("mongoose");

const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://reka1901:reka1901@namastenode.qr292ew.mongodb.net/devTinder")
}

module.exports=connectDB;

    

