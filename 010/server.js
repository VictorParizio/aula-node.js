const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // prepara o header da resposta
    res.setHeader('Content-Type', 'text/html')

    // sistema de roteamento
    let html_file = ''
    switch (req.url) {
        case '/':
            html_file = '010/views/index.html'
            break;
        case '/about':
            html_file = '010/views/about.html'
            break;

        default:
            html_file = '010/views/404.html'
            break;
    }

    fs.readFile(html_file, (err, data) => {
        if (err) {
            console.log('erro')
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