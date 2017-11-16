const express = require("express")

const staticRoutes = require("./static")
const dataRoutes = require("./data")

const routes = express.Router()

// ENDPOINTS
routes.use("/static", staticRoutes)
routes.use("/data", dataRoutes)

module.exports = routes
