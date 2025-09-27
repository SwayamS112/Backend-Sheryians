const express = require("express")
const app = express()
const morgan = require("morgan") // third party middleware

 // morgan a middleware as a logger for the site 
 // gives data of all the requests of the respective route  
app.use(morgan('dev'))

// to get data from html files
app.set('view engine','ejs') 

// to render static files in backend from frontend like CSS / JS 
app.use(express.static("public"))

//used as build-in middlewares to get data from post method to body to get in console
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//this is a custom middleware
// app.use((req,res,next)=>{
//     console.log("this is middleware");
    
//     const a = 1;
//     const b = 2;

//     console.log(a+b);
//     return next()
// })

app.get("/",(req,res)=>{
     // render to show html page with index as a file name
    res.render("index")
})

//used custom middleware for a specific route 
// this logic only works when /profile route hits
// app.get("/about",(req,res,next)=>{ 
//     const a=5;
//     const b=6;
//     console.log(a+b);

//     next();
// },(req,res)=>{

//     res.send("About page")
// })

app.get("/profile",(req,res)=>{
    res.send("Profile page")
})

// app.get("/get-form-data",(req,res)=>{
//     console.log(req.query);
//     res.send("Data received")
// })

app.post("/get-form-data",(req,res)=>{
    console.log(req.body);
    res.send("Data received")
})

app.listen(3000)

