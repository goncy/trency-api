import express from 'express'
import cors from 'cors'

import apiRequest from './apiRequest'

const app = express()
const PORT = process.env.PORT || 3005

app.use(cors())

app.get('/:ramal', async function (req, res) {
  try {
    const [horarios, posiciones] = await [
      await apiRequest(req.params.ramal, 'arribos'),
      await apiRequest(req.params.ramal, 'posiciones')
    ]
    res.json({horarios: JSON.parse(horarios), posiciones: JSON.parse(posiciones)})
  } catch (error) {
    res.status(500).send({error})
  }
})

app.listen(PORT, () => console.log('[INFO] Listening on *:' + PORT))
