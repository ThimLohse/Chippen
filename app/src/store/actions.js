import { createAction } from '@reduxjs/toolkit'

/** DUMMY ACTIONS */
export const ping = createAction('PING')
export const pong = createAction('PONG')

/** SOCKET ACTIONS */
export const socketConnectionRequested = createAction(
  'SOCKET_CONNECTION_REQUESTED'
)
export const socketConnectionSuccess = createAction(
  'SOCKET_CONNECTION_SUCCESS',
  (socketId) => ({
    payload: {
      socketId,
    },
  })
)
export const socketConnectionFailed = createAction('SOCKET_CONNECTION_FAILUre')

/** USER ACTIONS */
export const userNameCreated = createAction(
  'USER_NAME_CREATED',
  (userName) => ({
    payload: {
      userName,
    },
  })
)

/** ROOM CREATED */
export const userJoined = createAction('USER_JOINED', (userId) => ({
  payload: {
    userId,
  },
}))
export const userLeft = createAction('USER_LEFT', (userId) => ({
  payload: {
    userId,
  },
}))
export const roomCreated = createAction('ROOM_CREATED', (roomId) => ({
  payload: {
    roomId,
  },
}))
