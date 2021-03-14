import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware, createStateStreamEnhancer } from 'redux-most'
import { rootEpic, rootReducer } from './root'

const epicMiddleware = createEpicMiddleware(rootEpic)
const storeEnhancers = createStateStreamEnhancer(epicMiddleware)

export default function configureStore() {
  const store = createStore(rootReducer, storeEnhancers)
  return store
}
