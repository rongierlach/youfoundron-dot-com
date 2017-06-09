import types from '../constants/actionTypes'
import initialState from '../store/initialState'
import { selectNavStatus } from '../constants/selectors'

const defaultState = selectNavStatus(initialState)

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_SMALL:
      return state.set('isSmall', action.payload)
    case types.CLOSE_NAV:
      return state.set('expanded', false)
    case types.RESET_NAV:
      return state.set('expanded', undefined)
    case types.TOGGLE_NAV:
      return state.update('expanded', expanded => !expanded)
    default:
      return state
  }
}
