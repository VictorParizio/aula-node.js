//NodeJS módulo File System

const fs = require('fs')

/*
// create folder
if (!fs.existsSync('006/pasta1')) {
    fs.mkdir('006/pasta1', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Pasta criada com sucesso.')
        }
    })
} else {
    console.log('Pasta já existe')
}
*/

// remove folder
if (fs.existsSync('006/pasta1')) {
    fs.rm('006/pasta1', {recursive:true}, (err) => {
        if (err) {
            console.log(err)
            console.log('Pasta excluida')
        }
    })
} else {
    console.log('Pasta inexistente')
}

console.log('terminado')