const mongo = require("mongoose")

const connection = mongo.connect('mongodb://0.0.0.0/SheryiansBackend').then(()=>{
    console.log("Connected to database");
})

module.exports = connection