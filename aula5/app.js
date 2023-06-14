const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste,json')
const escreve = require('./escrever')
const ler = require('./ler')
/** 
const pessoa = [
    { nome: 'Ana'},
    { nome: 'Flavia'}
]
const json = JSON.stringify(pessoa, '', 2);
escreve(caminhoArquivo, json);

*/
async function lerArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados)
    //console.log(dados)
}
/** Monstrar dados raw 
function renderizaDados(dados){
    console.log(dados)
}
*/
/**  */
function renderizaDados(dados){
    dados = JSON.parse(dados)
    dados.forEach( item => console.log(item.nome))   
}
lerArquivo(caminhoArquivo)

