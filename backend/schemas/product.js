const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: String,
    description: { type: String, required: true },
    uses: [String],
    ideas_desc: String,
    ideas: [{ title: String, url: String }]
})

module.exports = mongoose.model("Product", productSchema);

