const mongoose = require("mongoose")
const Schema = new mongoose.Schema(

    {
        name:{
            type: String,
            required: true,
            trim:true

        },
        email:{
            type: String,
            required: true,
            unique: true

        },

        password:{
            type: String,
            required: true,
            minlength: 6

        },
        gender:{
            type:String,
            required:true,
            enum: ["male","female"]
        }

    }, 
    {timestamps: true}

)
module.exports = mongoose.model("user", Schema)