import {KEYS} from './constants'

const swapKey = key => key === KEYS[0] ? KEYS[1] : KEYS[0]

export default swapKey
