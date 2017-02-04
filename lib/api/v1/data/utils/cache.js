import cache from 'memory-cache'

import {CACHE_TIME} from '../constants'

export const setCache = (key, value, time = CACHE_TIME) => !cache.get(key) && cache.put(key, value, time)
export const getCache = key => cache.get(key)
