import { mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        trim:true
    }, 
    last_name:{
        type:String,
        required:true,
        trim:true
    }, 
   
    mobile:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true, 
        select: false
    },
    gender:{
        type:String,
        enum:["Male","Female","other"], 
    },

});

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;