// Dependencias requeridas
const Sequelize = require('sequelize')
const dataBase = require('../db/db')
// Criação do model 
const Filme = dataBase.define('filme',{
    id_filme: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false

    },
    link_snopse: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{dataBase,modelname:'filme',tableName:'filmes'})

module.exports = Filme