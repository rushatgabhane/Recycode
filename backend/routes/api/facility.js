const Facility = require("../../schemas/facility")
const express = require('express')
const router = express.Router()

// @route POST api/facility/add
// @desc add facility
// @access public
router.post('/add', async (req, res) => {
    const { coordinates, category, description, instructions } = req.body;
    try {

        const newFacility = new Facility({
            coordinates,
            category,
            description,
            instructions
        })
        await newFacility.save();

        res.json({ success: true })
    } catch (err) {
        console.error(err.message)
        return res.status(500).json({ errors: [{ msg: 'Server error' }] })
    }
})

module.exports = router

// todo: add a way to get facilities by the coordinates