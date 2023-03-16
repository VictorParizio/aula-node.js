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
    res.sendFile('./views/home.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})

app.get('/services', (req, res) => {
    res.sendFile('./views/services.html', { root: __dirname })
})

app.get('/sobre', (req, res) => {
    res.redirect('/about')
})

//ejs
app.get('/teste-ejs', (req, res) => {
    res.render('inicio')
})

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})