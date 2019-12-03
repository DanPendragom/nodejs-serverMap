const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors())
const PORT = 3001
const MARKERS = require('./data/outro.json')

app.get('/', (req, res) => {
     try {
          myfilter = (place) => {
               let array = ['Place 1', 'Place 2', 'Place 3', 'Place 4']
               
               // O que falta? 
               // 1° Receber duas latitudes e duas longitudes na requisição 
               // 2° Criar um array com todas as latitudes e longitudes entre estes valores
               // 3° Enviar como resposta todos os marcadorers com latitudes e longitudes dentro da intersecção
               // for(let i = 0; i < array.length; i++){
               //      if(place.name == array[i]){
               //           return place
               //      }
               // }

               let req = {lat: [20, 22], lng: [40, 42]}

               for(let i = 0; i <= req.lat.length;i++){
                    for(let f = 0; f <= req.lng.length;f++){
                         if(place.latitude <= req.lat[i] && place.longitude <= req.lng[f]){
                              return place
                         }
                    }
               }
          }

          let filtered = MARKERS.filter(myfilter)

          return res.send(filtered)
     }
     catch (err) {
          console.log(err)
          return res.status(400).send({ err: 'Get Makers failed' })
     }
})

app.listen(PORT)