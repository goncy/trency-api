const express = require("express")

const index = require("./index/")
const line = require("./line/")

const router = express.Router()

// ROUTES
router.use("/:line", line)

// ENDPOINTS
router.use("/", index)

module.exports = router
