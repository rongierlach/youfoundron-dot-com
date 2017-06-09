import {fromJS} from 'immutable'

export default fromJS({
  nav: {
    isSmall: undefined,
    expanded: undefined
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
