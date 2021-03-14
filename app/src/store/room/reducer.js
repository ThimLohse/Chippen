import { roomCreated, userJoined, userLeft } from '../actions'

const initialState = {
  roomId: null,
  users: {
    byId: {},
    ids: [],
  },
}

const addUser = ({ state, userId }) => {
  const { byId, ids } = state?.users
  return {
    byId: { ...byId, userId },
    ids: [...ids, userId],
  }
}

const roomReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case roomCreated.type: {
      const { roomId } = payload
      return { ...state, roomId }
    }
    case userJoined.type: {
      const { userId } = payload
      return { ...state, ...addUser({ state, userId }) }
    }
    case userLeft.type: {
      return { ...state }
    }
    default:
      return state
  }
}

export default roomReducer
