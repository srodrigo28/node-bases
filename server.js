/*** Segundo acesso com express rotas + Nodemon
 *   Reference: 
 *   https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/16679142#overview
*/
const express = require('express')
const app = express()

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