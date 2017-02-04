import express from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'

import {DEFAULT_PORT} from './constants'
import {notFound, portMessage} from './utils'

import api from './api'

const app = express()
const PORT = process.env.PORT || DEFAULT_PORT

// PLUGINS
app.use(helmet())
app.use(cors())
app.use(compression())

// ROUTES
app.use('/api', api)

// ENDPOINTS
app.get('*', notFound)

// SERVER
app.listen(PORT, portMessage(PORT))
