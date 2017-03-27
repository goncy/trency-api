export const bannedError = err => err &&
  err.error &&
  err.error.code &&
  err.error.code === 'ECONNREFUSED'
