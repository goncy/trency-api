import request from 'request-promise'
import userAgent from 'random-useragent'

import {randomString} from './methods'
import {API_URLS, API_HEADERS} from '../constants'

export const apiRequest = async (branch, tipo, key) => {
  return request({
    url: tipo === 'arribos'
      ? API_URLS.arrivals
      : API_URLS.positions,
    headers: {
      ...API_HEADERS,
      'User-Agent': userAgent.getRandom()
    },
    qs: {
      rnd: randomString(),
      ramal: branch,
      key
    }
  })
}