import scopeTypes from 'scope-types'

const appTypes = [
  'CLOSE_NAV',
  'TOGGLE_NAV'
]

const formTypes = [
  'CHANGE_NAME',
  'CHANGE_EMAIL',
  'CHANGE_MESSAGE'
]

export default {
  ...scopeTypes(appTypes),
  ...scopeTypes(formTypes, 'Form')
}
