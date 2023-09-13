const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5500

const app = express()

// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('JTH Coming Soon!')
})

app.listen(port, () => console.log(`Server started on port ${port}`))
