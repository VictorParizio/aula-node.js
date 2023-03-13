const http = require('http')

const server = http.createServer((req, res) => {

    //header
    res.setHeader('Content-Type', 'text/html')

    res.write('<head><link rel="stylesheet" href="app.css"></head>')
    res.write('<h2>Título Principal</h2>')
    res.write('<h4>Subtítulo</h4>')
    res.write('<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, repudiandae ratione sed tempora eos facilis nostrum debitis nobis nemo voluptates iusto recusandae reprehenderit nam quasi maiores sunt, provident consectetur sequi.</p>')

    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('servidor iniciado')
})