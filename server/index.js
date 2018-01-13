const express = require('express')
const path = require('path')
const fs = require('fs')

const PORT = process.env.NODE_ENV === 'production' ? 8000 : 3000

express()
  .get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'bundle.js'))
  })
  .use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      const filePath = path.join(__dirname, '..', 'dist', req.path)
      fs.stat(filePath, (err, data) => {
        if (err) console.error('No file found...' + err)
        else res.sendFile(filePath)
      })
    } else {
      next(null)
    }
  })
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
  })
  .listen(PORT)
