import express from 'express'
import cache from 'memory-cache'
import cors from 'cors'
import compression from 'compression'

import apiRequest from './apiRequest'
import {KEYS, swapKey} from './keys'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(compression())

let positionsKey = KEYS[0]
let arrivalsKey = KEYS[1]

app.get('/:branch', async function (req, res) {
  try {
    // Call endpoints
    const [arrivals, positions] = await [
      await apiRequest(req.params.branch, 'arribos', arrivalsKey),
      await apiRequest(req.params.branch, 'posiciones', positionsKey)
    ]
    // Swap key on error and cache response on success
    if (arrivals === 'incorrect key') arrivalsKey = swapKey(arrivalsKey)
    else if (!cache.get('arrivals')) cache.put('arrivals', arrivals, 10000)
    if (positions === 'incorrect key') positionsKey = swapKey(positionsKey)
    else if (!cache.get('positions')) cache.put('positions', positions, 10000)
    // Return response
    res.json({response: {
      arrivals: JSON.parse(cache.get('arrivals') || arrivals),
      positions: JSON.parse(cache.get('positions') || positions)}
    })
  } catch (error) {
    // Return error
    res.status(500).send({error: 'Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde', detail: error})
  }
})

app.listen(PORT, () => console.log('[INFO] Listening on *:' + PORT))
