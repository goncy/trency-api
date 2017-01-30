import request from 'request-promise'

import randomString from './randomString'

const apiRequest = async (branch, tipo) => request({
  url: `https://trenes.sofse.gob.ar/v2_pg/${tipo === 'arribos' ? 'arribos' : 'mapas'}/ajax_${tipo === 'arribos' ? 'arribos' : 'posiciones'}.php?`,
  headers: {
    'Referer': 'http://trenes.mininterior.gov.ar/v2_pg/',
    'Host': 'trenes.sofse.gob.ar'
  },
  qs: {
    rnd: randomString(),
    key: 'NRVQjcjTUF0I30EVFBDTqdWp%23',
    ramal: branch
  }
})

export default apiRequest
