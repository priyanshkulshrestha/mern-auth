const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required : true
    },
    phone: {
        type: Number, 
        required : true
    },
    work: {
        type: String, 
        required : true
    },
    password: {
        type: String, 
        required : true
    },
    cPassword: {
        type: String, 
        required : true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

 

userSchema.pre('save',async function(next){
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cPassword = await bcrypt.hash(this.cPassword, 12);
    }
    next()
})

// Generating token
userSchema.methods.generateAuthToken = async function(){
    try{
        let token  = jwt.sign({id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: token})
        await this.save();
        console.log(token);
    } catch(err) {
        console.log(err)
    }
}


const User = mongoose.model('USER', userSchema);

module.exports = User;