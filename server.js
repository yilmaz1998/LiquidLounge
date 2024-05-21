require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT 

const authRouter = require('./routers/authRouter')
const drinkRouter = require('./routers/drinkRouter')
const commentRouter = require('./routers/commentRouter')
const favoriteRouter = require('./routers/favoriteRouter')


app.use(express.json())

app.use('/auth', authRouter)
app.use('/drink', drinkRouter)
app.use('/comment', commentRouter)
app.use('/favorite', favoriteRouter)

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})