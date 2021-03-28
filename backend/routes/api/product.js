const Product = require("../../schemas/product")
const express = require('express')
const router = express.Router()

// @route POST api/product/add
// @desc add product
// @access public
router.post('/add', async (req, res) => {
    const { name,
        category,
        imageUrl,
        description,
        uses,
        ideas_desc,
        ideas } = req.body;
    try {

        const newProduct = new Product({
            name,
            category,
            imageUrl,
            description,
            uses,
            ideas_desc,
            ideas
        })
        await newProduct.save();

        res.json({ success: true })
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({ errors: [{ msg: 'Server error' }] })
    }
})

module.exports = router