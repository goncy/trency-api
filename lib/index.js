import express from 'express'
import cors from 'cors'

import apiRequest from './apiRequest'

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())

const keys = [
  'NRVQjcjTUF0I30EVFBDTqdWp%23',
  'v%23v%23QTUNWp%23MpWR0wkj%23RhHTqVUM'
]

let arrivalsKey = keys[0]
let positionsKey = keys[0]

const swapKey = key => key === keys[0] ? keys[1] : keys[0]

const swapKeyIfError = (arrivals, positions) => {
  if (arrivals === 'incorrect key') arrivalsKey = swapKey(arrivalsKey)
  if (positions === 'incorrect key') positionsKey = swapKey(positionsKey)
}

app.get('/:branch', async function (req, res) {
  try {
    const [arrivals, positions] = await [
      await apiRequest(req.params.branch, 'arribos', arrivalsKey),
      await apiRequest(req.params.branch, 'posiciones', positionsKey)
    ]
    console.log(arrivals, positions)
    console.log('Arrivals using key: ', arrivalsKey === keys[0] ? 0 : 1)
    console.log('Positions using key: ', positionsKey === keys[0] ? 0 : 1)
    swapKeyIfError(arrivals, positions)
    res.json({response: {arrivals: JSON.parse(arrivals), positions: JSON.parse(positions)}})
  } catch (error) {
    res.status(500).send({error: 'Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde', detail: error})
  }
})

app.listen(PORT, () => console.log('[INFO] Listening on *:' + PORT))
