const mongoose= require('mongoose');

const UserSchema =new mongoose.Schema({
   username:{
       type:String,
       required:true,
   },
   email:{
       type:String,
       required:true,
       unique:true
   },
   password:{
    type:String,
    required:true
    }
    
},
{timestamps:true}   //for automatically storing created_at and updated_at properties
);

const User= mongoose.model('User', UserSchema);
module.exports=User;