const express = require('express')
const router = express.Router()
const Company = require("../../schemas/company")
const auth = require('../../middleware/auth')

// @route GET api/dashboard
// @desc company dashboard
// @access private
router.get('/', auth, (req, res) => {
    try {
        res.send('dashboard route')
    } catch (err) {
        return res.status(500).json({errors: [{msg: 'Server error'}]})
    }
})

module.exports = router