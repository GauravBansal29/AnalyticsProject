const mongoose= require('mongoose');
const User= require('./User');
const QRCodeSchema =new mongoose.Schema({
   redirectUrl:{
        type: String,
        required: true
   },
   imgUrl:{
        type: String,
        required: true
   },
   userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: User
   }
},
{timestamps:true}   //for automatically storing created_at and updated_at properties
);

const QRCode = mongoose.model('QRCode', QRCodeSchema);
module.exports= QRCode;