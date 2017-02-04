import express from 'express'

import branch from './branch/'

const router = express.Router()

// ROUTES
router.use('/:branch', branch)

export default router
