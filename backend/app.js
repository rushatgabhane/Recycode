const express = require('express')
const app = express()
const cors = require("cors")
const QRCode = require("qrcode")
const mongoose = require('mongoose')
const companyController = require("./controllers/company-controller")
const port = 5000

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post("/company/signup",companyController.signup)

app.post("/company/login",companyController.login)

/*
// todo: retrieve information from database before compressing into QR code
app.get('/qrcode', (req, res) => {
    var qrCode;
    QRCode.toDataURL("www.google.com",function(err,url){
        res.send({url})
    })
  //todo: error handling
})
*/

app.use((error, req, res, next) => {

    res.status(error.status || 500);
    res.json({
      message: error.message || "An unknown error has occured on the server",
      status: error.status || 500,
    });
});

mongoose.connect(
    "mongodb+srv://admin:tY64btMwd6@QK8@@cluster0.b51ev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    // avoid some deprecation warnings
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
).catch((err)=>{
    console.log(err)
})