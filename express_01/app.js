const express = require('express')

// cria uma aplicação express
const app = express()

// registrar o template engine (view engine)
app.set('view engine', 'ejs')
app.set('views', './express_01/views')

// escuta os requests
app.listen(3000)

// routes
app.get('/', (req, res) => {
    res.render('home', { title: "Página Inicial" })
})

app.get('/about', (req, res) => {
    res.render('about', { title: "Sobre" })
})

app.get('/services', (req, res) => {
    res.render('services', { title: "Serviços" })
})

app.use((req, res) => {
    res.status(404).render('404', { title: "Erro!" })
})