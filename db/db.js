// Dependencias 
const Sequelize = require('sequelize')
// Criando conexão com o banco de dados 
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage:'./filmes.sqlite'
});

// Tramento de possiveis erros

try{
    sequelize.authenticate()
    console.log('Conexão com, o banco de dados realizada com sucesso!')
}catch(e){
    console.error('Não foi possivel realizar a conexão com o banco de dados')
}

module.exports = sequelize