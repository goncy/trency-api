import request from 'request-promise'

import randomString from './randomString'

const apiRequest = async (branch, tipo, key) => request({
  url: `https://trenes.sofse.gob.ar/v2_pg/${tipo === 'arribos' ? 'arribos' : 'mapas'}/ajax_${tipo === 'arribos' ? 'arribos' : 'posiciones'}.php?`,
  headers: {
    'Referer': 'http://trenes.mininterior.gov.ar/v2_pg/',
    'Host': 'trenes.sofse.gob.ar'
  },
  qs: {
    rnd: randomString(),
    ramal: branch,
    key
  }
})

export default apiRequest
