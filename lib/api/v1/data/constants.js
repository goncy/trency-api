import userAgent from 'random-useragent'
import {randomIp} from './utils/methods'

export const CACHE_TIME = 30000

export const API_URLS = {
  arrivals: 'https://trenes.sofse.gob.ar/v2_pg/arribos/ajax_arribos.php?',
  positions: 'https://trenes.sofse.gob.ar/v2_pg/mapas/ajax_posiciones.php?'
}

export const API_HEADERS = {
  'Referer': `https://trenes.sofse.gob.ar`,
  'Host': 'trenes.sofse.gob.ar',
  'Connection': 'keep-alive',
  'Accept': 'application/json, text/javascript, */*',
  'Accept-Language': 'es-ES,es;q=0.8,en;q=0.6,fr;q=0.4',
  'X-Requested-With': 'XMLHttpRequest',
  'User-Agent': userAgent.getRandom(),
  'X-Forwarded-For': randomIp(),
  'Referrer-Policy': 'no-referrer-when-downgrade'
}

export const KEYS = [
  'NRVQjcjTUF0I30EVFBDTqdWp%23',
  'v%23v%23QTUNWp%23MpWR0wkj%23RhHTqVUM'
]

export const RESTART_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/vnd.heroku+json; version=3',
  'Authorization': 'Bearer 8b0011a8-68ad-4a02-a5c1-8ee2623e7952'
}
