const express = require("express")

const v1 = require("./v1")

const routes = express.Router()

// ENDPOINTS
routes.use("/v1", v1)

module.exports = routes
