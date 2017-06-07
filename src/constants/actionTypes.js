import scopeTypes from 'scope-types'

const appTypes = [
  'CLOSE_NAV',
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
