// contains facility specific recycling information

const mongoose = require("mongoose")

const facilitySchema = new mongoose.Schema({
    coordinates: String,
    category: String,
    description: String,
    instructions: String
})

module.exports = mongoose.model("Facility", facilitySchema)