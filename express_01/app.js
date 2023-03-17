const express = require('express')

// cria uma aplicação express
const app = express()

// registrar o template engine (view engine)
app.set('view engine', 'ejs')
app.set('views', './express_01/views')

// escuta os requests
app.listen(3000)

// middleware
app.use((req, res, next) => {

    console.log('Novo pedido')
    console.log('Host:', req.hostname)
    console.log('Path:', req.path)
    console.log('Method:', req.method)
    next()

})

// routes
app.get('/', (req, res) => {
    res.render('home', { title: "Página Inicial" })
})

app.get('/about', (req, res) => {
    res.render('about', { title: "Sobre" })
})

app.get('/services', (req, res) => {

    const servicos = [
        { titulo_servico: "Desenvolvimento Web", descricao: "Desenvolvemos páginas e apps web." },
        { titulo_servico: "Desenvolvimento Desktop", descricao: "Desenvolvemos aplicações Desktop." },
        { titulo_servico: "Desenvolvimento Mobile", descricao: "Desenvolvemos apps mobile para Android e iOS" }
    ]

    res.render('services', { title: "Serviços", servicos })
})

app.use((req, res) => {
    res.status(404).render('404', { title: "Erro!" })
})