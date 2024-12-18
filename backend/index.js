import express from 'express'
import connectDB from './db.js'
import accommodation from './routes/accommodation.js'
import cors from 'cors'
import auth from './routes/auth.js'
import bodyParser from 'body-parser'
import wishlist from './routes/wishlist.js'
import validateToken from './routes/validateToken.js'
import env from 'dotenv'

env.config()
const app = express()
connectDB()
const PORT = process.env.PORT || 4000

app.use(cors({
    origin: '*  ',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json())
app.use('/validateToken', validateToken)
app.use('/accommodation', accommodation)
app.use('/auth', auth)
app.use('/wishlist', wishlist)

app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log('Server is listening on port ', PORT);
})