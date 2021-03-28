const express = require('express')
const app = express()
const cors = require("cors")
const QRCode = require("qrcode")
const config = require('config')
const connectDB = require('./config/db')()

app.use(cors())
app.use(express.json())

// define routes
app.use('/api/company', require('./routes/api/company'))
app.use('/api/dashboard', require('./routes/api/dashboard'))
app.use('/api/facility', require('./routes/api/facility'))
app.use('/api/product', require('./routes/api/product'))
app.use('/api/qrcode', require('./routes/api/qrcode'))

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

app.listen(config.get('port'), () => {
  console.log(`Server started at http://localhost:${config.get('port')}`)
})