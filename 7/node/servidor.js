const express = require("express");
const app = express();
app.set("view engine", "ejs")
app.use(express.static('public'))
const PORT = 8080

app.get("/", (requisicao, resposta) => {
    resposta.render('index')
})
app.get("/obj", (requisicao, resposta) => {
    resposta.render('objetivos')
})
app.get("/tec", (requisicao,resposta) => {
    resposta.render('tec')
})
app.get("/ps", (requisicao,resposta) => {
    resposta.render('portugol')
})
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))