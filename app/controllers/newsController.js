
const conn = require('../config/db')

const controller = {}

controller.index = (req, res) => {
 
    res.send('Notícias!') 
    console.log('Time: ', Date.now())
}

module.exports = controller