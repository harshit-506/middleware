const express = require('express')
const path=require('path')
const app=express();

//use absolute path for accessing static html
app.use(express.static(path.join(path.resolve(),"public")))
app.set("view engine","ejs");
app.get('/',(req,res)=>{
    res.render("index",{name:'Harshit'});
   
})

app.listen(3000,()=>{
    console.log("server is working")
});