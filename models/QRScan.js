const mongoose = require('mongoose');
const QRCode = require('./QRCode');
const QRScanSchema =new mongoose.Schema({
   qrId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: QRCode,
        required: true
   },
   location:{
        type: String,
        required: true
   },
   language:{
        type: String,
        required: true
   }
},
{timestamps:true}   //for automatically storing created_at and updated_at properties
);

const QRScan = mongoose.model('QRScan', QRScanSchema);
module.exports= QRScan;