var express = require('express')
var app = express()

const port = 3010


// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// GET method route
app.get('/home', function (req, res) {
  res.send('home')
})

// GET method route
app.get('/about', function (req, res) {
  res.send('about us')
})



// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(port, () => console.log('node is running at 3010'))