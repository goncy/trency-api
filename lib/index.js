const express = require("express")
const cors = require("cors")
const compression = require("compression")
const helmet = require("helmet")

const api = require("./api")
const graphql = require("./graphql")

const app = express()
const PORT = process.env.PORT || 8080

// PLUGINS
app.use(helmet())
app.use(cors())
app.use(compression())

// ROUTES
app.use("/api", api)

// GRAPHQL
graphql(app)

// ENDPOINTS
app.get("*", (req, res) =>
  res.status(404).send({ error: "No se encontro un servicio para esta ruta" })
)

// SERVER
app.listen(PORT, () => console.log("[INFO] Listening on *:" + PORT))
