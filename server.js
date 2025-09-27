const express = require('express')
const app = express()

const mongo = require('mongoose')
const userModel = require("./models/user.models")
const dbConnection = require("./config/db")


app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine','ejs') 

app.post("/get-form-data",(req,res)=>{
    console.log(req.body);
    res.send("Data received")
})

app.get("/",(req,res)=>{
    res.render("index")
})

// show the form from ejs file / html file
app.get("/register",(req,res)=>{
    res.render("register")
})

// create the actual user from the data sent from the ejs file using method /register
app.post("/register",async (req,res)=>{
    

// to save the values from the input fields we do this below line of code
    const {name , emailAddress , password , age , gender} = req.body
//now get the data from the user inputs to mongo model
// used async await function because this whole works take some time
    await userModel.create({
        username:name,
        email:emailAddress,
        password:password,
        age:age,
        gender:gender
    })
    
    console.log(req.body);
    res.send("user register")
})

app.listen(3000)