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

export const submitForm = e => ({
  type: types.SUBMIT_FORM
})
