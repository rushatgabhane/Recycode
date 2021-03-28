const express = require('express')
const router = express.Router()
const Company = require("../../schemas/company")
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

// @route POST api/qrcode
// @desc returns url to set for the qrcode.
// @access private
router.post('/', [
	check('productId', 'Please include a valid product Id').escape().trim().not().isEmpty()
], async (req, res) => {
	try {
		const errors = validationResult(req)
		if(!errors.isEmpty()){
			return res.status(400).json({errors: errors.array()})
		}
		const {productId} = req.body
		const url = `${req.headers.host}/${req.user.id}/${productId}`
		return res.json({url: url})
	} catch (err) {
		console.error(err.message)
		return res.status(500).json({ errors: [{ msg: 'Server error' }] })	
	}
})

// @route GET api/qrcode/:companyId/:productId
// @desc returns url for the scanned qrcode.
// @access public
router.get('/:companyId/:productId', async (req, res) => {
	try {
		let company = await Company.findById(companyId).select('-password')
		if(!company) {
			return res.status(400).json({ errors: [{ msg: 'Invalid company id and product id' }] })
		}
		// +1 url hit for a company
		company.qrCodesScanned += 1
		await company.save()
		return res.redirect(`/product/${productId}`)
	} catch (err) {
		console.error(err.message)
		return res.status(500).json({ errors: [{ msg: 'Server error' }] })
	}
})

module.exports = router