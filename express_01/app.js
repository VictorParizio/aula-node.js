const express = require('express')

// cria uma aplicação express
const app = express()

// escuta os requests
app.listen(3000)

// routes
app.get('/', (req, res) => {
    res.status(200).sendFile('./views/home.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.status(200).sendFile('./views/about.html', { root: __dirname })
})

app.get('/services', (req, res) => {
    res.status(200).sendFile('./views/services.html', { root: __dirname })
})

app.get('/sobre', (req, res) => {
    res.status(302).redirect('/about')
})

app.use((req, res) => {
    // res.sendFile('./views/404.html', { root: __dirname })
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})