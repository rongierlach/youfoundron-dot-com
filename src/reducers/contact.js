import types from '../constants/actionTypes'
import initialState from '../store/initialState'
import { selectContactStatus } from '../constants/selectors'

const defaultState = selectContactStatus(initialState)

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return state.setIn(['form', 'name'], action.payload)
    case types.CHANGE_EMAIL:
      return state.setIn(['form', 'email'], action.payload)
    case types.CHANGE_MESSAGE:
      return state.setIn(['form', 'message'], action.payload)
    default:
      return state
  }
}
