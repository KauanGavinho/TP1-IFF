const express = require("express");
const app = express();
const fs = require('fs')
app.set("view engine", "ejs")
const PORT = 8080

app.get("/", (req, res) => {
    res.render('index');
    resultado = ''
    
})
app.get("/salvar", (req, res) => {
    let nome = req.body.nomeresultado = (`Olá, ${nome}`)
    res.render('index', { resultado })
})


app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))