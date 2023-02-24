const express = require("express")
const app = express()
app.use(express.json())

const appRoute = require("./routes/appRoute.js")
app.use("/", appRoute)

const port = process.env.PORT || 3000
app.listen(port, console.log(`Listening on port ${port}...`))
