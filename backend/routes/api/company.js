const Company = require("../schemas/company")
const bcrypt = require("bcryptjs")
const ServerError = require("../ServerError")
const jwt = require("jsonwebtoken")
const express = require('express')
const router = express.Router()

// @route POST api/company/signup
// @desc sign up 
// @access public
router.post('/signup', async (req, res) => {
    const {name,email,password} = req.body;
    let hashedPassword;
    // 12 is the strength of the hash
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        return next(new ServerError("Error hashing password"))
    }
    const newCompany = new Company({
        name,
        email,
        password:hashedPassword,
        qrCodesScanned: 0,
        usersRecycled: 0
    })

    try{
        await newCompany.save();
    } catch(err){
        return next(new ServerError("Error saving data"))
    }
    res.status(201).json({signedIn:true});
})

// @route POST api/company/login
// @desc login 
// @access public
router.post('/login', async (req, res) => {
    const {name,password} = req.body
    let existingCompany
    let isValidPassword
    let validCredentials = true

    try{
        existingCompany= await Company.findOne({name})
    } catch(err){
        return next(new ServerError(err.msg))
    }
    if(!existingCompany){
        console.log("no company")
        validCredentials = false;
    } else{
        isValidPassword = await bcrypt.compare(password,existingCompany.password)
        if(!isValidPassword){
            console.log("invalid password")
            validCredentials = false
        }
    }
    res.json({validCredentials})
})

module.exports = router