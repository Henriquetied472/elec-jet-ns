const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
let data = new Date()
let hora = data.getHours()
let minuto = data.getMinutes()

app.use(express.static('public'))
app.use(cors)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/send', (req, res, next) => {

    

})

app.listen(port, () => {

    console.log(`Servidor rodando porta ${port}, link de acesso => http://localhost:3000/. Hora atual => ${hora}:${minuto}`)

})