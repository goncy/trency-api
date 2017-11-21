const express = require("express")
const cors = require("cors")
const compression = require("compression")
const helmet = require("helmet")

require("now-logs")("goncy")

const { DEFAULT_PORT } = require("./constants")
const { notFound, portMessage } = require("./utils")

const api = require("./api")

const app = express()
const PORT = process.env.PORT || DEFAULT_PORT

// PLUGINS
app.use(helmet())
app.use(cors())
app.use(compression())

// ROUTES
app.use("/api", api)

// ENDPOINTS
app.get("*", notFound)

// SERVER
app.listen(PORT, portMessage(PORT))
