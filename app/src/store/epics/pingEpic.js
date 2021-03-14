import { ping, pong } from '../actions'
import { select } from 'redux-most'

export const pingEpic = (action$, _store) => {
  return action$.thru(select(ping.type)).map(() => pong())
}
