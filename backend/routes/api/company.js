const Company = require("../../schemas/company")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const express = require('express')
const router = express.Router()
const config = require('config')
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
// @route POST api/company/signup
// @desc sign up 
// @access public
router.post('/signup', [
    check('email', 'Please include a valid email').isEmail().escape().trim(),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8, max: 32 }).escape().trim(),
    check('name', 'Company name is required').escape().trim().not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { name, email, password } = req.body;
    let hashedPassword; // 12 is the strength of the hash
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        let company = await Company.findOne({ email })
        if (company) {
            return res.status(400).json({
                errors: [{ msg: 'Email is already registered. Please login.' }]
            })
        }

        hashedPassword = await bcrypt.hash(password, 12);
        const newCompany = new Company({
            name,
            email,
            password: hashedPassword,
            qrCodesScanned: 0,
            usersRecycled: 0
        })
        await newCompany.save();

        // return jsonwebtoken
        const payload = {
            user: {
                id: newCompany.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({ errors: [{ msg: 'Server error' }] })
    }
})

// @route POST api/company/login
// @desc login 
// @access public
router.post('/login', [
    check('email', 'Please include a valid email').isEmail().escape().trim(),
    check('password', 'Password is required').escape().trim().not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const { email, password } = req.body
    try {
        let existingCompany = await Company.findOne({ email })
        if (!existingCompany) {
            return res.status(400).json({
                errors: [{ msg: 'Invalid credentials' }]
            })
        }
        let isValidPassword = await bcrypt.compare(password, existingCompany.password)
        if (!isValidPassword) {
            return res.status(400).json({
                errors: [{ msg: 'Invalid credentials' }]
            })
        }

        // return jsonwebtoken
        const payload = {
            user: {
                id: existingCompany.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (err) {
        console.error(err.msg)
        return res.status(500).json({ errors: [{ msg: 'Server error' }] })
    }
})

// @route GET api/company
// @desc get company details
// @access private
router.get('/', auth, async (req, res) => {
    try {
        const company = await Company.findById(req.user.id).select('-password') // select everything but the password
        return res.json({company})
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({ errors: [{ msg: 'Server error' }] })
    }
})

module.exports = router