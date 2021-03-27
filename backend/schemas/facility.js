// contains facility specific recycling information

const mongoose = require("mongoose")

const facilitySchema = new mongoose.Schema({
    coordinates: {type:String},
    productType: {type:String},
    instructions: {type:String},
})

module.exports = mongoose.model("Region",regionSchema)