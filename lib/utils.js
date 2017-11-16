const notFound = (req, res) =>
  res.status(404).send({ error: "No se encontro un servicio para esta ruta" })

const portMessage = port => () => console.log("[INFO] Listening on *:" + port) //eslint-disable-line

module.exports = {
  notFound,
  portMessage
}
