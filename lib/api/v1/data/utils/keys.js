import {KEYS} from '../constants'

export const swapKey = key => key === KEYS[0]
  ? KEYS[1]
  : KEYS[0]
