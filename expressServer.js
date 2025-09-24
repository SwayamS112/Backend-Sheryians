const express = require("express")
const app = express()
const morgan = require("morgan") // third party middleware

 // morgan a middleware as a logger for the site 
 // gives data of all the requests of the respective route  
app.use(morgan('dev'))

// to get data from html files
app.set('view engine','ejs') 


//this is a custom middleware
app.use((req,res,next)=>{
    console.log("this is middleware");
    
    const a = 1;
    const b = 2;

    console.log(a+b);
    return next()
})

app.get("/",(req,res)=>{
     // render to show html page with index as a file name
    res.render("index")
})

//used custom middleware for a specific route 
// this logic only works when /profile route hits
app.get("/about",(req,res,next)=>{ 
    const a=5;
    const b=6;
    console.log(a+b);

    next();
},(req,res)=>{

    res.send("About page")
})

app.get("/profile",(req,res)=>{
    res.send("Profile page")
})

app.listen(3000)

