const { KEYS } = require("./constants")
const { apiRequest } = require("./utils/api")
const { swapKey } = require("./utils/keys")
const { setCache, getCache } = require("./utils/cache")

let positionsKey = KEYS[0]
let arrivalsKey = KEYS[1]

module.exports = async id => {
  // Check if this request is cached
  const cachedArrivals = getCache(`arrivals_${id}`)
  const cachedPositions = getCache(`positions_${id}`)
  if (cachedArrivals && cachedPositions) {
    return {
      arrivals: JSON.parse(cachedArrivals),
      positions: JSON.parse(cachedPositions)
    }
  } else {
    // If its not cached, make the request and cache it
    try {
      // Call endpoints
      const [arrivals, positions] = await [
        await apiRequest(id, "arribos", arrivalsKey),
        await apiRequest(id, "posiciones", positionsKey)
      ]

      // Swap key on arrivals error and cache response on success
      arrivals === "incorrect key"
        ? (arrivalsKey = swapKey(arrivalsKey))
        : setCache(`arrivals_${id}`, arrivals)
      // Swap key on positions error and cache response on success
      positions === "incorrect key"
        ? (positionsKey = swapKey(positionsKey))
        : setCache(`positions_${id}`, positions)

      // Return response
      return {
        arrivals: JSON.parse(arrivals),
        positions: JSON.parse(positions)
      }
    } catch (error) {
      throw {
        error:
          "Hubo un problema obteniendo las posiciones y horarios, por favor, intente nuevamente mas tarde",
        detail: error
      }
    }
  }
}
