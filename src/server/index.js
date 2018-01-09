const express = require('express')
const path = require('path')
const fs = require('fs')

express()
  .get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'bundle.js'))
  })
  .use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
      const filePath = path.join(__dirname, '..', '..', 'dist', req.path)
      fs.stat(filePath, (err, data) => {
        if (err) throw new Error('No file found...' + err)
        else res.sendfile(filePath)
      })
    } else {
      next(null)
    }
  })
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
  })
  .listen(3000, () => {
    console.log(`
      Server listening on port 3000...
    `)
  })
