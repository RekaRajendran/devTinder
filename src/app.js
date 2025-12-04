const express = require('express');

const app=express();
/**
 * Express 5 does not allow modifier characters like +, ?, * in plain path strings.
 * 
 * /ab?c ---/ac , /abc  ----express version 4
 * /^\/ab?c$/  -- /ac, abc ----express version 5
 * ? as optional for the character before it
 * 
 * /ab+c  --/abc,/abbc,/ac, /abbbc(Multiple b s)
 * Here, + means one or more of the preceding character
 * 
 * /ab*cd -- /acd, /abcd, /abbcd, 
 * Here, * means zero or more of the previous character (b)
 * 
 * /ab.*cd -- /abcd, /abXYZcd, ab 123 cd
 * Here, * Any characters between ab and cd
 *  
 * /^\/a$/ --EXACT /a only - /a
 * /a/  --- contains letter a -  /apple, /cat
 * /\/a/ contains /a path segment -/test/a/xyz
 * 
 * /.*fly$/   --- end with fly 
 * 
 * /user/:userid/:name/:password : http://localhost:3000/user/700/ddd/fff
 * 
 */
app.get("/user/:userid/:name/:password",(req,res)=>{
//    console.log(req.query);
    console.log(req.params);
        console.log(req.params.userid);
    res.send({firstname:"Reka",lastname:"Rajendran"})
})  
// app.get("/user",(req,res)=>{
//    console.log(req.query);
//     res.send({firstname:"Reka",lastname:"Rajendran"})
// })  

app.listen(3000,()=>{
    console.log("server is successfully listening on port  3000")
});
