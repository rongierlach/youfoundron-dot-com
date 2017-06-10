import types from '../constants/actionTypes'
import initialState from '../store/initialState'
import { selectContactFormStatus } from '../constants/selectors'

const defaultState = selectContactFormStatus(initialState)

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return state.set('name', action.payload)
    case types.CHANGE_EMAIL:
      return state.set('email', action.payload)
    case types.CHANGE_MESSAGE:
      return state.set('message', action.payload)
    case types.SUBMIT_FORM:
      return state.set('submitted', true)
    default:
      return state
  }
}
