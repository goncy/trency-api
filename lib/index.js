import express from 'express'
import cors from 'cors'

import apiRequest from './apiRequest'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

app.get('/:branch', async function (req, res) {
  try {
    const [arrivals, positions] = await [
      await apiRequest(req.params.branch, 'arribos'),
      await apiRequest(req.params.branch, 'posiciones')
    ]
    res.json({response: {arrivals: JSON.parse(arrivals), positions: JSON.parse(positions)}})
  } catch (error) {
    res.status(500).send({error: 'Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde'})
  }
})

app.listen(PORT, () => console.log('[INFO] Listening on *:' + PORT))
