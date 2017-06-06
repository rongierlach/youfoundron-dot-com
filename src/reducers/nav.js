import types from '../constants/actionTypes'
import initialState from '../store/initialState'
import { selectNavStatus } from '../constants/selectors'

const defaultState = selectNavStatus(initialState)

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CLOSE_NAV:
      return state.set('expanded', false)
    case types.TOGGLE_NAV:
      return state.update('expanded', expanded => !expanded)
    default:
      return state
  }
}
