const request = require("request-promise")

const { randomString } = require("./methods")
const { API_URLS, API_HEADERS } = require("../constants")

const apiRequest = async (branch, tipo, key) =>
  request({
    url: tipo === "arribos" ? API_URLS.arrivals : API_URLS.positions,
    headers: API_HEADERS,
    qs: {
      rnd: randomString(),
      ramal: branch,
      key
    }
  })

module.exports = { apiRequest }
