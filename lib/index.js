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
  // Check if this request is cached
  const cachedArrivals = getCache(`arrivals_${req.params.branch}`)
  const cachedPositions = getCache(`positions_${req.params.branch}`)
  if (cachedArrivals && cachedPositions) {
    res.json({response: {
      arrivals: JSON.parse(cachedArrivals),
      positions: JSON.parse(cachedPositions)}
    })
  } else {
    // If its not cached, make the request and cache it
    try {
      // Call endpoints
      const [arrivals, positions] = await [
        await apiRequest(req.params.branch, 'arribos', arrivalsKey),
        await apiRequest(req.params.branch, 'posiciones', positionsKey)
      ]

      // Swap key on arrivals error and cache response on success
      arrivals === 'incorrect key'
        ? arrivalsKey = swapKey(arrivalsKey)
        : setCache(`arrivals_${req.params.branch}`, arrivals)
      // Swap key on positions error and cache response on success
      positions === 'incorrect key'
        ? positionsKey = swapKey(positionsKey)
        : setCache(`positions_${req.params.branch}`, positions)

      // Return response
      res.json({response: {
        arrivals: JSON.parse(arrivals),
        positions: JSON.parse(positions)}
      })
    } catch (error) {
      // Return error
      res.status(500).send({error: 'Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde', detail: error})
    }
  }
})

app.listen(PORT, () => console.log('[INFO] Listening on *:' + PORT))
