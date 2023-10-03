const port = 8080;
const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json)
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('cadastro')
})

app.post('/app', (req, res) => {
    const data = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome
    }
    res.render('index', {data})
})

app.listen(port, () => {
    console.log(`server funcionando na porta ${port}`)
})