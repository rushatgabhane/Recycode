const express = require('express')
const app = express()
const cors = require("cors")
const QRCode = require("qrcode")
const mongoose = require('mongoose')
const config = require('config')

app.use(cors())
app.use(express.json())

app.use('/api/company', require('./routes/api/company'))

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

// @route  GET invalid routes
// @desc   Display page not found message
// @access Public
app.get('*', (req, res) => {
	res.status(404).send('404');
});

mongoose.connect(
    config.get('mongoURL'),
    // avoid some deprecation warnings
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
).catch((err)=>{
    console.error(err)
})

app.listen(config.get('port'), () => {
  console.log(`Example app listening at http://localhost:${config.get('port')}`)
})