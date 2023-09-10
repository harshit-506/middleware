const express = require('express')
const path=require('path')
const app=express();

//use absolute path for accessing static html
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended:true}));
//using middleware 
app.set("view engine","ejs");
const user=[];
app.get("/",(req,res)=>{
    res.render("index",{name:"singh"});
})

app.get('/success',(req,res)=>{
    res.render("success");
   
})
app.post('/contact',(req,res)=>{
     // u can access name as well
    user.push({usename:req.body.name,email:req.body.email})

    res.redirect("/success")
})
// it is temperory data
app.get("/user",(req,res)=>{
    res.json({
        user,
    })
})

app.listen(3000,()=>{
    console.log("server is working")
});