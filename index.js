const app = require('./app/config/express').app

const PORT = app.get('port')

app.listen(PORT, () => {
    console.log(`>>> Server running on port ${PORT}...`)
})