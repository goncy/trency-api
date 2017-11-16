const cache = require("memory-cache")

const { CACHE_TIME } = require("../constants")

const setCache = (key, value, time = CACHE_TIME) =>
  !cache.get(key) && cache.put(key, value, time)
const getCache = key => cache.get(key)

module.exports = {
  setCache,
  getCache
}
