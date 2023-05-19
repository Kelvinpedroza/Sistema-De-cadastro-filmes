// Dependencias requeridas
const dataBase = require("./db/db");
const express = require("express");
const app = express();
const filme = require("./model/Filmes");
const hand = require("express-handlebars");
const FilmeController = require("./controlles/ControllerFilme");
const filmesRoutes = require("./rotes/routesFilme");
// UTILIZANDO O HANDLEBARS
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.set(express.static('public'))
// ROTAS
app.use('/',filmesRoutes)
// Sinconização com o banco de dados
try {
  dataBase.sync().then(() => {});
  app.listen(9443, () => console.log("Servidor On"));
} catch (e) {
  console.error("Não foi possivel realizar o sinconismo com o banco de dados");
}
