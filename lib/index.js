import express from 'express'
import cors from 'cors'
import compression from 'compression'

import {KEYS, DEFAULT_PORT} from './constants'
import {apiRequest} from './utils/api'
import {swapKey} from './utils/keys'
import {setCache, getCache} from './utils/cache'

const app = express()
const PORT = process.env.PORT || DEFAULT_PORT

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

    // Swap key on arrivals error and cache response on success
    arrivals === 'incorrect key'
      ? arrivalsKey = swapKey(arrivalsKey)
      : setCache('arrivals', arrivals)
    // Swap key on positions error and cache response on success
    positions === 'incorrect key'
      ? positionsKey = swapKey(positionsKey)
      : setCache('positions', positions)

    // Return response
    res.json({response: {
      arrivals: JSON.parse(getCache('arrivals') || arrivals),
      positions: JSON.parse(getCache('positions') || positions)}
    })
  } catch (error) {
    // Return error
    res.status(500).send({error: 'Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde', detail: error})
  }
})

app.listen(PORT, () => console.log('[INFO] Listening on *:' + PORT))
