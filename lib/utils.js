export const notFound = (req, res) => res
  .status(404)
  .send({error: 'No se encontro un servicio para esta ruta'})

export const portMessage = port => () => console.log('[INFO] Listening on *:' + port)
