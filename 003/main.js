//módulo e require
console.log('Inicio')

/* Exemplo 1
const texto = require('./modulo')
console.log(texto)
*/

/* Exemplo 2
const pessoas = require('./modulo')
console.log(pessoas)
*/

/* Exemplo 3
const dados = require('./modulo')
console.log(dados.nomes)
console.log(dados.cidades)
console.log(dados.cidades[1])
*/

const { nomes, cidades, texto, adicionar } = require('./modulo')
console.log(nomes)
console.log(cidades)
console.log(texto)
console.log(adicionar(10,20))
