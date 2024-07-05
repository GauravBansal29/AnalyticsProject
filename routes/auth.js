const express = require('express');
const User= require('../models/User');

const router = express.Router()


router.post('/register', async(req, res)=>{
    console.log('entered');
    try{
        console.log(req.body);
        let {username, email, password} = req.body;
        let user_exist= await User.findOne({email});
        if(user_exist) return res.status(400).json('USER ALREADY EXISTS');
        const user= new User({username, email , password});  //if fields problem use object destructuring 
        await user.save();
        return res.status(201).json(user);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json(err);
    }
})

router.post('/login', async(req, res)=>{
    try{
        let {email, password} = req.body;
        let  user= await User.findOne({email: email, password: password});
        if(!user) return res.status(401).json("USERNAME OR PASSWORD IS INVALID");
        return res.status(200).json(user);
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
})


module.exports = router;