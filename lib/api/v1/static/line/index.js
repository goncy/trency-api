import express from 'express'

import get from './get'

const router = express.Router({mergeParams: true})

// ENDPOINTS
router.route('/')
  .get(get)

export default router
