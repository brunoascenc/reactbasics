import express from 'express'
import cellphonesData from './data'

const app = express()

app.get('/api/products', (req, res) => {
    res.send(cellphonesData)
})

app.listen(4000, () => {console.log('Started at 3000 port')} )