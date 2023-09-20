const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {

response.send('Envie os parâmetros n1 e n2 para a rota /soma')
})

app.get('/soma', (req, res) => {
console.log("n1="+req.body.n1)
console.log("n2="+req.body.n2)
result = parseFloat(req.body.n1)+parseFloat(req.body.n2)
if (isNaN(result)) {
 result = "Valores inválidos."
} else {
 result = `${req.body.n1} + ${req.body.n2} = ${result}`
}

res.send({conta: result})
})


app.listen(8080)