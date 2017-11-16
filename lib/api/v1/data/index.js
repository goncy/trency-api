const express = require("express")

const branch = require("./branch/")

const router = express.Router()

// ROUTES
router.use("/:branch", branch)

module.exports = router
