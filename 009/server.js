const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // prepara o header da resposta
    res.setHeader('Content-Type', 'text/html')

    // prepara o conteúdo da página
    fs.readFile('./009/html_pages/index.html', (err, data) => {
        if (err) {
            console.log('aconteceu um erro')
            res.end()
        } else {
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('servidor iniciado')
})