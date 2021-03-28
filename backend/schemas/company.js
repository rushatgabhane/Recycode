const mongoose = require("mongoose")

const companySchema = new mongoose.Schema({
    name:{type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    qrCodesScanned:{type:Number,required:true},
    usersRecycled:{type:Number,required:true}
})

module.exports = mongoose.model("Company",companySchema)