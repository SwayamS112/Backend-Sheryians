const mongo = require("mongoose")

const userSchema = new mongo.Schema({
   username:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   age:{
    type:Number,
   },
   gender:{
    type:String,
    enum:["male","female"]
   }
})

const userModel = mongo.model("user",userSchema)

module.exports = userModel 