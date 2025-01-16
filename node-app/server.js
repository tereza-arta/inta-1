const express = require('express')
const app = express()
//const port = 4000
const EXPRESS_PORT = process.env.EXPRESS_PORT || 4000

app.use(express.static('frontend'))

app.get('/info', (req, res) => {
    res.status(200).json({info: 'preset text'})
})

app.listen(EXPRESS_PORT, () => console.log(`Server has startted on port: ${EXPRESS_PORT}`))
