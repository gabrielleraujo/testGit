const express = require("express");
const exp = express();

exp.get("/", (req, res) => {
    res.status(200).send( { message: "Estou funcionando."} );
})

exp.get("/ola", (req, res) => {
    res.status(200).send( { message: "Oi, eu sou a rota ola."} );
})

exp.listen(3001, () => {
    console.log("Api rodando na porta 3001.");
})
