const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    companyName: {type:String,required:true},
    companyEmail: {type:String,required:true},
    productType: {type:String, required:true},
    productName: {type:String, required:true}
})

module.exports = mongoose.model("Product", productSchema);

