const express = require('express')
const router = express.Router()
const Company = require("../../schemas/company")
const auth = require('../../middleware/auth')

// @route GET api/dashboard
// @desc company dashboard
// @access private
router.get('/', auth, async (req, res) => {
    try {
        const company = await Company.findById(req.user.id).select('-password') // select everything but the password
        return res.json({company})
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({errors: [{msg: 'Server error'}]})
    }
})

module.exports = router