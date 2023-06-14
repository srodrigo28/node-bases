/*** Segundo acesso com express rotas + Nodemon
 *   Reference: 
 *   https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/learn/lecture/16679142#overview
*/
const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log('Server On Port 3000!')
})