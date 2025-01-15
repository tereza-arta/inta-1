const express = require('express')
const app = express()
const port = 4000

app.use(express.static('public'))

app.get('/info', (req, res) => {
    res.status(200).json({info: 'preset text'})
})

app.listen(port, () => console.log(`Server has startted on port: ${port}`))
