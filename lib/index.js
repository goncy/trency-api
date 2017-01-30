import express from 'express'
import cors from 'cors'

import apiRequest from './apiRequest'
import swapKey from './swapKey'
import {KEYS} from './constants'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

let positionsKey = KEYS[0]
let arrivalsKey = KEYS[1]

app.get('/:branch', async function (req, res) {
  try {
    // Call endpoints
    const [arrivals, positions] = await [
      await apiRequest(req.params.branch, 'arribos', arrivalsKey),
      await apiRequest(req.params.branch, 'posiciones', positionsKey)
    ]
    // Swap key on error
    if (arrivals === 'incorrect key') arrivalsKey = swapKey(arrivalsKey)
    if (positions === 'incorrect key') positionsKey = swapKey(positionsKey)
    // Return response
    res.json({response: {arrivals: JSON.parse(arrivals), positions: JSON.parse(positions)}})
  } catch (error) {
    // Return error
    res.status(500).send({error: 'Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde', detail: error})
  }
})

app.listen(PORT, () => console.log('[INFO] Listening on *:' + PORT))
