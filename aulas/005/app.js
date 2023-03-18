//NodeJS módulo File System

const fs = require('fs')

// reading files
if (fs.existsSync('005/dados.csv')) {
    fs.readFile('005/dados.csv', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data.toString())
        }
    })
} else {
    console.log('Ficheiro não encontrado.')
}

console.log ('Última operação')