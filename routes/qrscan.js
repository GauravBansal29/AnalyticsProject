const express = require('express');
const QRScan= require('../models/QRScan')

const router = express.Router()

//create a new scan
router.post('/', async(req, res)=>{
    try{
        const {qrId, location, language} = req.body;
        const newScan = new QRScan({qrId, location, language});
        newScan.save();
        return res.status(201).json("New QR Scan added successfully");
    }
    catch(err){
        return res.status(500).json("Unable to add a QR Scan");
    }
})

// get all scans on a qrcode
router.get('/all/:id', async(req, res)=>{
    try{
        const qrId= req.params.id;
        const scans= await QRScan.find({qrId});
        return res.status(200).json(scans);

    }
    catch(err){
        return res.status(500).json(err);
    }
})

module.exports = router;