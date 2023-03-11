/* 
1 - No terminal rodar node .\server.js (nome do arquivo do servidor);

2 - Executar Ctrl+c para parar a aplicação e executar novamente node server.js (para atualizar o server);

3 - Para criar um server simples:

const server = require('http')

server.createServer((req, res) => {
    res.end("teste 2")
}).listen(3000)

4 - .listen(3000) é a porta do server (localhostel:3000) no browser;
*/

const http = require('http')
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((request, response)=>{
    response.end('Teste novo de Node.js')
}).listen(port, host, ()=>{
    console.log('Servidor em execução v.2')
})