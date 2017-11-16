const { LINES_DATA } = require("../constants")

const get = (req, res) => res.json({ response: LINES_DATA })

module.exports = get
