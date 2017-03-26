var request = require('request-promise')

request({
  url: 'https://api.heroku.com/apps/trenesargentinosapi/dynos',
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.heroku+json; version=3',
    'Authorization': 'Bearer 8b0011a8-68ad-4a02-a5c1-8ee2623e7952'
  }
})
