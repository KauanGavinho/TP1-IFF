const express = require("express");
const app = express();
app.set("view engine", "ejs")

app.get("/", (requisicao, resposta) => {
    resposta.render('index')
})
app.get("/obj", (requisicao, resposta) => {
    resposta.render('objetivos')
})
app.get("/tec", (requisicao,resposta) => {
    resposta.render('tec')
})
app.listen(8080)