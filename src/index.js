import express from "express";
import paymentRoute from './routes/payment.routes.js'
import {PORT} from './config.js'
import path from 'path'

const app = express()

app.use(paymentRoute)

app.use(express.static(path.resolve('src/public')))

app.listen(PORT)
console.log(`Server running on port ${PORT}`)