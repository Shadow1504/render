const express=require("express");
const app=express();

app.get("/",(req,res)=>
{
    res.send("connected data");
})


app.listen(10000,()=>{
    console.log("connected");


})