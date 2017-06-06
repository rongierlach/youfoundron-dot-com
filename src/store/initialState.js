import {fromJS} from 'immutable'

export default fromJS({
  nav: {
    expanded: false
  },
  contact: {
    form: {
      name: undefined,
      email: undefined,
      message: undefined
    }
  }
})
