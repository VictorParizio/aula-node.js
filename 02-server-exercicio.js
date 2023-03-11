const http = require('http')
const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (req.url == '/') {
        res.end('Página inicial do nosso website')
    } else if (req.url == '/new') {
        res.end('Página nova do nosso website')
    } else if (req.url == '/contacts') {
        res.end('Página de contacts do nosso website')
    } else {
        res.end('Página desconhecida')
    }
})

server.listen(port, host, () => {
    console.log('Novo servidor em função.')
})