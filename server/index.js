const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")

dotenv.config() ;

const app = express() ;

app.use(express.json()) ;

app.use("/api/auth" , authRoute)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT , () => {
            console.log("DB connected and listning to" , process.env.PORT)
        })
    })
    .catch(() => {
        console.log(error)
    })

