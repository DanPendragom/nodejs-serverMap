const express = require('express')
const cors = require('cors');
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = 3001

app.use(cors())

app.use((req, res, next) => {
     req.io = io
     next();
})

http.listen(PORT, () => {
     console.log('Listening on port ' + PORT)
})

app.use(require('./routes'));