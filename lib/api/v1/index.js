import express from 'express'

import staticRoutes from './static'
import dataRoutes from './data'

const routes = express.Router()

// ENDPOINTS
routes.use('/static', staticRoutes)
routes.use('/data', dataRoutes)

export default routes
