const userAgent = require("random-useragent")
const { randomIp } = require("./utils/methods")

const REFERER = "trenesendirecto.sofse.gob.ar"
const CACHE_TIME = 30000

const API_URLS = {
  arrivals: `https://${REFERER}/arribos/ajax_arribos.php?`,
  positions: `https://${REFERER}/mapas/ajax_posiciones.php?`
}

const API_HEADERS = {
  Referer: `https://${REFERER}`,
  Host: `${REFERER}`,
  Connection: "keep-alive",
  Accept: "application/json, text/javascript, */*",
  "Accept-Language": "es-ES,es;q=0.8,en;q=0.6,fr;q=0.4",
  "X-Requested-With": "XMLHttpRequest",
  "User-Agent": userAgent.getRandom(),
  "X-Forwarded-For": randomIp(),
  "Referrer-Policy": "no-referrer-when-downgrade"
}

const KEYS = [
  "NRVQjcjTUF0I30EVFBDTqdWp%23",
  "v%23v%23QTUNWp%23MpWR0wkj%23RhHTqVUM"
]

module.exports = {
  CACHE_TIME,
  API_URLS,
  API_HEADERS,
  KEYS
}
