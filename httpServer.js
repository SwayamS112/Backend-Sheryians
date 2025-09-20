const http = require("http")

const server = http.createServer((req,res)=>{
    
    if(req.url == "/about"){
        res.end("About page")
    }

    if(req.url == "/"){
        res.end("Home")
    }

    if(req.url == "/profile"){
        res.end("The profile page")
    }
    
    console.log(req.url);
})


server.listen(3000)