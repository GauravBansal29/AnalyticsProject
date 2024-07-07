
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const auth = require('./routes/auth.js');
const qrcode = require('./routes/qrcode.js')
const qrscan = require('./routes/qrscan.js')
const dotenv= require('dotenv')
const cors = require('cors');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const corsOptions = {
    origin: '*', // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow specific methods
    allowedHeaders: '*', // Allow specific headers
    credentials: true, // Enable cookies
};

app.use(cors(corsOptions));
dotenv.config();
app.use('/api', auth)
app.use('/api/qr', qrcode)
app.use('/api/scan', qrscan)

app.use(express.json());

// in mongoose.connect we need to paas database url in mongo atlas which we are extracting from env using dotenv module 
mongoose.connect(process.env.DATABASE). then(()=>{console.log("DB connected");}).catch(err=>console.log("err in connecting DB"+ err))  // mongoose.connect returns a promise
////////////////////////////////////////////////////////////////////////////////////
app.use(morgan("dev")); // for status codes and errors 

port = 3000
app.listen(port , ()=>{
    console.log(`server is running on ${port}`);
})