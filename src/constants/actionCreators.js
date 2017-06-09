import types from './actionTypes'

export const setSmall = isSmall => ({
  type: types.SET_SMALL,
  payload: isSmall
})

export const closeNav = () => ({
  type: types.CLOSE_NAV
})

export const resetNav = () => ({
  type: types.RESET_NAV
})

export const toggleNav = () => ({
  type: types.TOGGLE_NAV
})

export const changeName = e => ({
  type: types.CHANGE_NAME,
  payload: e.target.value
})

export const changeEmail = e => ({
  type: types.CHANGE_EMAIL,
  payload: e.target.value
})

export const changeMessage = e => ({
  type: types.CHANGE_MESSAGE,
  payload: e.target.value
})
