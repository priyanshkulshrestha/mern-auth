const express = require('express');
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

require("../models/conn");
const User = require("../models/userSchema")

router.get("/", (req,res) => {
    res.send("helloo")
})

// using promissies

// router.post("/register", (req, res) => {
//     User.findOne({email: req.body.email}).then((userExisit) => {
//         if(userExisit) {
//             return res.status(422).json({ error: "Email already Registerd"})
//         }

//         const user = new User(req.body);
//         user.save().then(()=>{
//             res.status(201).json({message: "user registerd successufuly"});
//         }).catch((err) => 
//             res.status(500).json({error: `failed to register ${err}`}))
//     }).catch(err => {console.log(err)})

//Using Async Await

router.post("/register", async(req, res) => {

    try {
        const userExisit = await User.findOne({email: req.body.email})
            if(userExisit) {
                return res.status(422).json({ error: "Email already Registerd"})
            }
    
            const user = new User(req.body);
            
            const userRegister = await user.save();
            if(userRegister){
                res.status(201).json({message: "user registerd successufuly"});
            }
            else{
                res.status(500).json({error: `failed to register `})
            }
    } catch(err){
        console.log(err)
    }

})


router.post('/signin', async(req,res)=>{
    // console.log(req.body);
    // res.json({message: "ok"})
    let {email, password} = req.body;

    try{
        if(!email || !password){
            console.log("Enter proper credential")
            return res.status(400).json({error:"Enter proper credential"})
        }

        const userLogin = await User.findOne({ email: email})
        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() +  30000000000),
                httpOnly: true
            })

            if(isMatch){
                res.json({message: "User Login Successfully"})
        } else{
            res.status(400).json({error: "Invalid credentials"})
        }
        }
        else{
        res.json({message:"does not have any account"})
        }

    }catch (err) {
        console.log(err);
    }
})


    // console.log(req.body);
    // res.json({message: req.body})
    // res.send("printed");
    


router.get("/about", (req,res) => {
    res.send("helloo about")
})

router.get("/contact", (req,res) => {
    res.cookie("jwtoken", token)
    res.send("helloo contact")
})

router.get("/login", (req,res) => {
    res.send("helloo login")
})

router.get("/logout", (req,res) => {
    res.send("helloo logout")
})

module.exports = router;