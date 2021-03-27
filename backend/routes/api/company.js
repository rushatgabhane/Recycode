const Company = require("../../schemas/company")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const express = require('express')
const router = express.Router()

// @route POST api/company/signup
// @desc sign up 
// @access public
router.post('/signup', async (req, res, next) => {
    const { name, email, password } = req.body;
    let hashedPassword; // 12 is the strength of the hash
    try {
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
                id: user.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (err) {
        return res.status(500).json({ errors: [{ msg: 'Server error' }] })
    }
})

// @route POST api/company/login
// @desc login 
// @access public
router.post('/login', async (req, res, next) => {
    const { name, password } = req.body
    try {
        const existingCompany = await Company.findOne({ name })
        if (!existingCompany) {
            return res.status(400).json({
                errors: [{ msg: 'Invalid Credentials' }]
            })
        } else {
            let isValidPassword = await bcrypt.compare(password, existingCompany.password)
            if (!isValidPassword) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Credentials' }]
                })
            }
        }
        // return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
            if (err) throw err
            res.json({ token })
        })
    } catch (err) {
        return res.status(500).json({ errors: [{ msg: 'Server error' }] })
    }
})

module.exports = router