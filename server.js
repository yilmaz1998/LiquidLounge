require("dotenv").config()
const express = require("express")
const app = express()
const cors = require('cors')
const port = process.env.PORT 

const db = require('./models')

const authRouter = require('./routers/authRouter')
const drinkRouter = require('./routers/drinkRouter')
const commentRouter = require('./routers/commentRouter')
const favoriteRouter = require('./routers/favoriteRouter')
const classicDrinkRouter = require('./routers/classicDrinkRouter')


app.use(express.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/drink', drinkRouter)
app.use('/comment', commentRouter)
app.use('/favorite', favoriteRouter)
app.use('/classic', classicDrinkRouter)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})