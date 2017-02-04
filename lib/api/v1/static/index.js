import express from 'express'

import index from './index/'
import line from './line/'

const router = express.Router()

// ROUTES
router.use('/:line', line)

// ENDPOINTS
router.use('/', index)

export default router
