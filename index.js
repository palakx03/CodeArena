const express = require('express')
const app = express()
const port = 3002

app.get('/sign up', function(req, res) {
  res.send('Hello World!')
})

app.get('/login', function(req, res) {
  res.json{
    name: 'Palak',
    age: 21
  }
})

app.get('/Submissions', function(req, res) {
  res.send(`
    <html>
      <body>
        <h1>Palak</h1>
      </body>
    </html>`)
})

app.listen(port, function()  {
  console.log(`Example app listening on port ${port}`)
}) 