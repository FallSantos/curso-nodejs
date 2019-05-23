const app = require('./config/express')

const PORT = app.get('port')

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})