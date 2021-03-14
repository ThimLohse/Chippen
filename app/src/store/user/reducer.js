import { userNameCreated } from '../actions'

const initialState = {
  userName: null,
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case userNameCreated.type: {
      const { userName } = payload
      return { ...state, userName }
    }
    default:
      return state
  }
}

export default userReducer
