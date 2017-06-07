// import types from '../constants/actionTypes'
import initialState from '../store/initialState'
import { selectBlogStatus } from '../constants/selectors'

const defaultState = selectBlogStatus(initialState)

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
