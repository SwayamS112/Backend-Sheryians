const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello Home page")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})

app.get("/profile",(req,res)=>{
    res.send("Profile page")
})

app.listen(3000)

