const controller = {}

controller.index = (req, res) => {
    
    res.render('home')
    
    console.log('Time: ', Date.now())  
}

module.exports = controller