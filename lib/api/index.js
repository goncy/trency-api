import express from 'express'

import v1 from './v1'

const routes = express.Router()

// ENDPOINTS
routes.use('/v1', v1)

export default routes
