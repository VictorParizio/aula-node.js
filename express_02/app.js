const express = require('express');
const app = express();
app.listen(3000);

// routes
app.get('/', (req, res) => {
    res.send('Olá Mundo!');
})

// clientes
app.get("/clientes/:id_cliente", (req, res)=>{
    // res.send(req.params)
    res.send(`O cliente selecionado foi o ${req.params.id_cliente}`)
})

app.get("/clientes/:id/comentarios/:id_comentarios", (req, res)=>{
    res.send(req.params)
})

app.get("/adicao/:valor1/:valor2", (req, res)=>{
    res.send(`A adição dos valores é: ${+req.params.valor1 + + req.params.valor2}`)
})