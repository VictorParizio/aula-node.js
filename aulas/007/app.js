// streams

const fs = require('fs')

const readStream = fs.createReadStream('007/dados.txt', { encoding: 'utf-8'})
const writeStream = fs.createWriteStream('007/output.txt')

readStream.on('data', (dados) => {
    console.log('#########################################')
    console.log(dados.toString())
    writeStream.write('\n=================================\n')
    writeStream.write(dados)
})