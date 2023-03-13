// streams

const fs = require('fs')

const readStream = fs.createReadStream('007/dados.txt' { encoding: 'utf-8'})

readStream.on('data', (dados) => {
    console.log('#########################################')
    console.log(dados.toString())
})