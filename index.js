//configuração incial
require('dotenv').config()
const express = require ('express')
const mongoose = require ('mongoose')
const app =  express()


// forma de ler JSON // middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da API

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial / endpoint
app.get('/', (req, res)=> {

    //mostrar requisição
    
    res.json({alert:'Every day a new skill test!'})
})




//entregar uma porta "utilizando o express na porta 3000"
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.DB_PASSWORD)

mongoose
.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.dsm9td9.mongodb.net/?retryWrites=true&w=majority`
)
.then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
})
.catch((err) =>console.log(err))

