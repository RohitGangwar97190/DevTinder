const express=require("express"); 
//import the express from the nodemodules///
const app=express();
//we craete the app///
app.use("/test",(req,res) =>{
    res.send("hello from the server world");
}) 
app.use("/",(req,res) =>{
    res.send("hello from the server world helloooo which is very vast and large");
}) 
///this function is a request handler/////
app.listen(3000,()=>{
    console.log("server is running on port no which is 3000");
})
//in this we create our own server whcih is listen on the port no 3000/////