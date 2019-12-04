const express = require('express')
const cors = require('cors');
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const PORT = 3001
const MARKERS = require('./data/markers.json')

app.use((req, res, next) => {
     req.io = io
     next();
})

app.use(cors())

app.get('/', (req, res) => {
     try {
          myfilter = (place) => {
               let resp = JSON.parse(req.query.placemarked)
               if (place.latitude <= resp.lat[0] && place.longitude <= resp.lng[0]) {
                    if (place.latitude >= resp.lat[1] && place.longitude >= resp.lng[1]) {
                         return place
                    }
               }
          }

          let filtered = MARKERS.filter(myfilter)

          req.io.emit('place', filtered)
          return res.send(filtered)
     }
     catch (err) {
          console.log(err)
          return res.status(400).send({ err: 'Get Makers failed' })
     }
})

http.listen(PORT, () => {
     console.log('Listening on port ' + PORT)
})