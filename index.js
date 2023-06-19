const express = require('express')
const app = express()
const porta = 443


app.get("/descricao", function(req, res) {
  res.send('Descricao')
})

app.get("/software", function(req, res) {
  res.send('Software')
})

app.get("/logomarca", function(req, res) {
  res.send('Logomarca')
})

app.get("/catalogo", function(req, res) {
  res.send('Catalogo')
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/home.html')
})

app.get("/p1", function(req, res) {
  res.sendFile(__dirname + '/p1.html')
})

app.get("/p2", function(req, res) {
  res.sendFile(__dirname + '/p2.html')
})

app.get("/p3", function(req, res) {
  res.sendFile(__dirname + '/p3.html')
})



app.listen(porta, () => {
  console.log('Servidor rodando!')
})
