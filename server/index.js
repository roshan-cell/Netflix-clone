const dotenv = require("dotenv")
const express = require("express");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

dotenv.config() ;

const app = express() ;

app.use(express.json()) ;

app.use("/api/auth" , authRoute)
app.use("/api/users" , userRoute) 

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT , () => {
            console.log("DB connected and listning to" , process.env.PORT)
        })
    })
    .catch(() => {
        console.log(error)
    })

