import { combineReducers } from 'redux-immutable'

import nav from './nav'
import blog from './blog'

export default combineReducers({
  nav,
  blog
})
