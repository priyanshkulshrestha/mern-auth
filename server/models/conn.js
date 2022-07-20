const mongoose = require("mongoose")
// const dbconn = require('./models/conn.js');
const dotenv = require('dotenv');

dotenv.config()

//db connection 
const db = process.env.MONGODB_URI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Connected Successfuly")
}).catch((err) => console.log(err + "no connection"));