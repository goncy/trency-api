const isBannedError = err =>
  err && err.error && err.error.code && err.error.code === "ECONNREFUSED"

module.exports = {
  isBannedError
}
