import request from 'request-promise'

import randomString from './randomString'

const apiRequest = async (ramal, tipo) => request({
  url: `https://trenes.sofse.gob.ar/v2_pg/${tipo === 'arribos' ? 'arribos' : 'mapas'}/ajax_${tipo === 'arribos' ? 'arribos' : 'posiciones'}.php?`,
  headers: {
    'Referer': 'http://trenes.mininterior.gov.ar/v2_pg/',
    'Host': 'trenes.sofse.gob.ar'
  },
  qs: {
    rnd: randomString(),
    key: 'v%23v%23QTUNWp%23MpWR0wkj%23RhHTqVUM',
    ramal
  }
})

export default apiRequest
