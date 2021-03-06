const { LINES_DATA } = require("../constants")

const get = (req, res) => {
  const lineData = LINES_DATA.find(line => line.id === req.params.line)

  return lineData
    ? res.json({ response: lineData })
    : res.status(400).send({ error: "No se encontraron resultados" })
}

module.exports = get
