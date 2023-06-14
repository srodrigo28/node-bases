const express = require('express')
const route = express.Route()
const homeController = require('./controllers/homeController')
const contatoController = require()

app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})
app.get('/contato', homeController.paginaInicial)
app.post('/form', (req, res) => {
    res.send(`
        <h1>Cadastrado com sucesso</h1>

        <a href="/contato">
            <button>Voltar</button>
        </a>
    `)
})

module.exports = route;