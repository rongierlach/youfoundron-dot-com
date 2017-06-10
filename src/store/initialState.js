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
    name: '',
    email: '',
    message: '',
    submitted: false
  }
})
