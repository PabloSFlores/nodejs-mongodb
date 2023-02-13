const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()
const userRoutes = require('./routes/user')

const app = express()
const port = process.env.PORT || 9000

// middleware
app.use(express.json())
app.use('/api', userRoutes)

//routes
app.get('/',(req,res) => {
    res.send('Welcome to my mongodb api')
})

//MongoDb conection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDb atlas'))
.catch((error) => console.error(error))

app.listen(port,() => console.log('Server listening on port', port))