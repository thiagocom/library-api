const express = require("express")
const mongoose = require("mongoose")
const logger = require("morgan")
const rfs = require("rotating-file-stream")
const cors = require("cors")
require("dotenv").config()
const bookRoutes = require("./routes/book.routes")
const authorRoutes = require("./routes/author.routes")

// App
const app = express()
app.set("port", process.env.PORT || 8000)

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

if (process.env.NODE_ENV == "production") {
	const accessLogStream = rfs("app.log", {
		interval: "1d",
		size: "10M"
	})
	app.use(logger("combined", { stream: accessLogStream }))	
} else {
	app.use(logger("dev"))
}


// Connection with moongose
mongoose.connect(process.env.CONNECT_STRING,
	{ useNewUrlParser: true, useUnifiedTopology: true })
	.catch(err => console.error(err))
const { connection } = mongoose
connection.on("error", err => console.error(err))
mongoose.set("useFindAndModify", false)

// Routes
app.use("/books", bookRoutes)
app.use("/authors", authorRoutes)

// Error handler
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500
	res.status(statusCode).json({ success: false, message: err.message })
})

module.exports = app