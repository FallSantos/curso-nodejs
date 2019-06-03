const conn = require('../config/db')

const controller = {}

controller.show = (req, res, next) => {
 
    conn.query('SELECT * FROM news_tb', (error, result, fields) => {
        res.send(result)
    })

    console.log('Time: ', Date.now())
    next()
}

controller.showOne = (req, res, next) => {
 
    res.send("Retorna: " + req.params.id)

    console.log('Time: ', Date.now())
    next()
}


module.exports = controller