import {fromJS} from 'immutable'

export default fromJS({
  nav: {
    expanded: false
  },
  blog: {
    posts: [],
    search: undefined
  },
  contactForm: {
    name: undefined,
    email: undefined,
    message: undefined
  }
})
