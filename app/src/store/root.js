import { pingEpic } from './epics'
import roomReducer from './room/reducer'
import userReducer from './room/user'
import defaultReducer from './default/reducer'
import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  defaultReducer,
  userReducer,
  roomReducer,
})

export const rootEpic = combineEpics(pingEpic)(
  action$,
  store$,
  dependencies
).pipe(
  catchError((error, source) => {
    console.error(error)
    return source
  })
)
