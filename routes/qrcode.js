const express = require('express');
const User= require('../models/User');
const QRCode= require('../models/QRCode')

const router = express.Router()

//create a new qrcode
router.post('/', async(req, res)=>{
    try{
        let {imgUrl, redirectUrl, userId} = req.body;
        const qr= new QRCode({imgUrl , redirectUrl, userId});
        await qr.save();
        return res.status(201).json(qr)
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
})

// Update the redirect url of a qrcode by id
router.put('/:id', async(req, res)=>{
    try{
        const qrid= req.params.id;
        if(!qrid) return res.status(400).json('Bad request');
        let {imgUrl, redirectUrl, userId} = req.body;
        const updatedQR= await QRCode.findByIdAndUpdate(qrid, {imgUrl, redirectUrl, userId}, {new:true});
        return res.status(200).json(updatedQR);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
} )

// delete a qrcode using qr id
router.delete('/:id', async (req, res)=>{
    try{
        const qrcode= await QRCode.findById(req.params.id)
        if(!qrcode) return res.status(404).json("QRCode not found");
        await qrcode.deleteOne();
        return res.status(200).json("QRCode deleted successfully");
    }
    catch(err){
        return res.status(500).json("Internal Server Error");
    }
})

// get a qrcode by id for postscan page
router.get('/:id', async(req, res)=>{
    try{
        const qrId= req.params.id;
        const qrcode= await QRCode.findById(qrId);
        if(!qrcode) return res.status(404).json('No qrcode found')
        return res.status(200).json(qrcode);
    }
    catch(err){
        return res.status(500).json(err);
    }
})
// get all qrcodes by user
router.get('/all/:id', async(req, res)=>{
    try{
        const userId= req.params.id;
        const qrcodes= await QRCode.find({userId});
        return res.status(200).json(qrcodes);

    }
    catch(err){
        return res.status(500).json(err);
    }
})



module.exports = router;