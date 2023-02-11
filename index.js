const mongoose = require("mongoose")
const express = require("express")


const app = express()
const url = "mongodb+srv://auth:12345@cluster0.b9h43w1.mongodb.net/auth"
const authRouter = require("./routes/auth.router")

mongoose.set('strictQuery', true)
mongoose.connect(url,()=> {
    console.log("Database Connected");
})

app.use(express.json())
app.use('/auth', authRouter )
app.listen(8061, () => {
    console.log("server listening at port 8061");
})

