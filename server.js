const express = require('express')
const app = express()
const routes = require('./routes')

app.get('/', (req, res) => {
    res.send('<h1>Hello, world!</h1>')
})

app.get('/contato', (req, res) => {
    res.send(`
        <h1>Contato</h1>
        <form method="post" action="/form">
            Nome: <input type="text" name="nome" />
            Contato: <input type="text" name="contato" />
            <button>Enviar</button>
        </form>
    `)
})

app.post('/form', (req, res) => {
    res.send(`
        <h1>Cadastrado com sucesso</h1>

        <a href="/contato">
            <button>Voltar</button>
        </a>
    `)
})

app.listen(3000, () => {
    console.log('Server on port 3000!')
})