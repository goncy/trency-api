import request from 'request-promise'

import {randomString} from './methods'
import {API_URLS, API_HEADERS} from '../constants'

const r = request.defaults({'proxy': 'http://189.41.56.237:3128'})

export const apiRequest = async (branch, tipo, key) => {
  return r({
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
}
