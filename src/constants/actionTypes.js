import scopeTypes from 'scope-types'

const appTypes = [
  'SET_SMALL',
  'CLOSE_NAV',
  'RESET_NAV',
  'TOGGLE_NAV'
]

const contactFormTypes = [
  'CHANGE_NAME',
  'CHANGE_EMAIL',
  'CHANGE_MESSAGE'
]

export default {
  ...scopeTypes(appTypes),
  ...scopeTypes(contactFormTypes, 'ContactForm')
}
