const LINES = require("./constants")

const lines = () => LINES
const line = id => LINES.find(line => line.id === id)

module.exports = {
  lines,
  line
}
