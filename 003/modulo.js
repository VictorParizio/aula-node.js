/* Exemplo 1
let nomes = ['João', 'Ana', 'Carlos']
console.log('estou em modulo.js')
console.log(nomes)
*/

/* Exemplo 2
let nomes = ['João', 'Ana', 'Carlos']

// module.exports = "Esta frase esta no modulo.js"
module.exports = nomes
*/

const nomes = ['João', 'Ana', 'Carlos']
const cidades = ['Lisboa', 'Porto', 'Faro']

module.exports = {
    nomes,
    cidades
}