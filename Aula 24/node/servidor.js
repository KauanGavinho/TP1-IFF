const express = require("express");
const app = express();
app.set("view engine", "ejs")

app.get("/", (requisicao, resposta) => {
    resposta.render('index')
})

app.listen(8080)