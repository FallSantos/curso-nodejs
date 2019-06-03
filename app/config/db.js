require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_TYPE
    }
) 
// Verifica se a conecção foi realizada com sucesso.
sequelize
    .authenticate()
    .then(() => {
        console.log('>>> Database connect successfuly!')
    })
    .catch((error) => {
        console.log('>>> Database not connect: ' + error)
    })

module.exports = sequelize