const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config()

// middleware
// const middleware = (req, res, next) => {
//     console.log("check or do any thing u want ");
//     next()
// }
app.use(express.json());
app.use(require('./routes/auth'))

const dbconn = require('./models/conn.js');
const User = require('./models/userSchema'); 

app.listen(8000, () => {
    console.log("listening on 8000")
})