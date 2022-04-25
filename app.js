require("dotenv").config();
const cors = require("cors");
var data = new Date();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());

app.get("/huggy", (req, res) => {
  res.status(200).send({ rs: `${res.data}` });
});

// Tratamento ao erro de requisição inexistente, ou seja, o erro 404
app.use((req, res) => {
  res.type("application/json");
  res.status(404).send({ erro: "404 - Página não encontrada" });
});

// Porta do servidor
app.listen(process.env.PORT || 4000);

console.log("Servidor Online... Para finalizar utilize CTRL + C");
