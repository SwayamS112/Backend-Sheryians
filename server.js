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
    const {username , email , password , age , gender} = req.body
//now get the data from the user inputs to mongo model
// used async await function because this whole works take some time

//CRUD ->
// 1. Create
    await userModel.create({
        username:username,
        email:email,
        password:password,
        age:age,
        gender:gender
    })
    
    console.log(req.body);
    res.send("user register")
})

// 2. Read
app.get("/get-users",(req,res)=>{
    // returns all the data present inside user
    // userModel.find().then((users)=>{
    //    res.send(users)
    // })
  
    // this is a condition only the username with 'b' will be printed

    //  userModel.find({
    //     username:'b'
    //  }).then((users)=>{
    //    res.send(users)
    // })
    
    // findOne only returns one data 
    userModel.findOne().then((users)=>{
       res.send(users)
    })
})

// 3. Update

app.get('/update-user',async (req,res)=>{
    await userModel.findOneAndUpdate({
        username:"a"
    },{
        email:"c@c.com"
    })
    res.send("User Updated")
})

// 4. delete 

app.get("/delete-user",async (req,res)=>{
    await userModel.findOneAndDelete({
        username:"a"
    })
    res.send("User Deleted")
})
app.listen(3000)