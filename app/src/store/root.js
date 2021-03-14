import { pingEpic } from './epics'
import roomReducer from './room/reducer'
import userReducer from './user/reducer'
import defaultReducer from './default/reducer'
import { combineEpics } from 'redux-most'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  defaultReducer,
  userReducer,
  roomReducer,
})

export const rootEpic = combineEpics([pingEpic])

// export const rootEpic = (action$, store) =>
//   combineEpics([pingEpic])(action$, store).pipe(
//     catchError((error, source) => {
//       console.error(error)
//       return source
//     })
//   )
