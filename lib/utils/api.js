import request from 'request-promise'
import userAgent from 'random-useragent'

import {randomString} from './methods'

export const apiRequest = async (branch, tipo, key) => request({
  url: `https://trenes.sofse.gob.ar/v2_pg/${tipo === 'arribos' ? 'arribos' : 'mapas'}/ajax_${tipo === 'arribos' ? 'arribos' : 'posiciones'}.php?`,
  headers: {
    'Referer': 'http://trenes.mininterior.gov.ar/v2_pg/',
    'Host': 'trenes.sofse.gob.ar',
    'User-Agent': userAgent.getRandom()
  },
  qs: {
    rnd: randomString(),
    ramal: branch,
    key
  }
})
