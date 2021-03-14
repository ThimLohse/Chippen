import {
  socketConnectionRequested,
  socketConnectionSuccess,
  socketConnectionFailed,
} from '../actions'

const initialState = {
  isLoadingSocketConnection: false,
  socketConnectionId: null,
  socketConnectionError: null,
}

const defaultReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case socketConnectionRequested.type: {
      return { ...state, isLoadingSocketConnection: true }
    }
    case socketConnectionSuccess.type: {
      const { socketId } = payload
      return {
        ...state,
        isLoadingSocketConnection: false,
        socketConnectionError: false,
        socketConnectionId: socketId,
      }
    }
    case socketConnectionFailed.type: {
      return {
        ...state,
        isLoadingSocketConnection: false,
        socketConnectionError: true,
      }
    }

    default:
      return state
  }
}

export default defaultReducer
