const express = require('express')
const path = require('path');
const app = express()
const port = 1234

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use('/login', require('./routes/login'));
app.use('/transfer', require('./routes/transfer'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
