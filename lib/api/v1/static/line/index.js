import express from 'express'

import get from './get'

const router = express.Router()

// ENDPOINTS
router.route('/')
  .get(get)

export default router
