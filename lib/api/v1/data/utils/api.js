import request from 'request-promise'

import {randomString} from './methods'
import {API_URLS, API_HEADERS, RESTART_HEADERS} from '../constants'

export const apiRequest = async (branch, tipo, key) => request({
  url: tipo === 'arribos'
    ? API_URLS.arrivals
    : API_URLS.positions,
  headers: API_HEADERS,
  qs: {
    rnd: randomString(),
    ramal: branch,
    key
  }
})

export const restartServer = request({
  url: 'https://api.heroku.com/apps/trenesargentinosapi/dynos',
  method: 'DELETE',
  headers: RESTART_HEADERS
})
