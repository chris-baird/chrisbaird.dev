import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import morgan from "morgan"
import { join } from "path"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

// Loading dotenv file
import "dotenv/config.js"

// Pulling in routes
import routes from "./routes/index.js"

// Logger middleware
morgan(":method :url :status :res[content-length] - :response-time ms")

// Mongoose connection string
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/passport-jwt"
)
// Mongoose error handler
mongoose.connection.on("error", (error) => {
  throw error
})
// Mongoose promise configuration
mongoose.Promise = global.Promise

// Loading auth middleware
import "./auth/auth.js"

// Loading bodyparser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Serves up react app
app.use(express.static(join(__dirname, "../client/build")))

// Routes configuration
app.use(routes)

//Handle errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({ error: err })
})

export default app
