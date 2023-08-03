
const express = require('express')
const app = express()
const connection = require('./knexfile')['development']
const db = require('knex')(connection);
app.use(express.json());

app.get('/', (req, res) =>{
    res.json('Hola mundo')
})

app.get('/empresa', (req, res)=>{
    db('empresa').then((empresa)=>{
        res.json(empresa)
    })
})

app.get('/persona', (req, res)=>{
    db('persona').then((empresa)=>{
        res.json(empresa)
    })
})

app.get('/pedido', (req, res)=>{
    db('pedido').then((empresa)=>{
        res.json(empresa)
    })
})

app.listen(3000, () =>{
    console.log('La aplicación esta escuchando el puerto 3000')
})