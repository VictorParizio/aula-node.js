const express = require('express')

// cria uma aplicação express
const app = express()

// escuta os requests
app.listen(3000)

// routes
app.get('/', (req, res) => {
    // res.send('<h1>Teste</h1>')
    res.sendFile('./views/home.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    // res.send('<h1>About</h1>')
    res.sendFile('./views/about.html', { root: __dirname })
})