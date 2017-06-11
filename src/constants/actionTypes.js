const scopeTypes = (types = [], scope = 'App') => (
  types.reduce(
    (scopedTypes, type) => {
      scopedTypes[type] = Symbol(`${scope}/${type}`)
      return scopedTypes
    }, {}
  )
)

const appTypes = [
  'SET_SMALL',
  'CLOSE_NAV',
  'RESET_NAV',
  'TOGGLE_NAV'
]

const contactFormTypes = [
  'CHANGE_NAME',
  'CHANGE_EMAIL',
  'CHANGE_MESSAGE',
  'SUBMIT_FORM'
]

export default {
  ...scopeTypes(appTypes),
  ...scopeTypes(contactFormTypes, 'ContactForm')
}

// export default {
//   SET_SMALL: 'SET_SMALL',
//   CLOSE_NAV: 'CLOSE_NAV',
//   RESET_NAV: 'RESET_NAV',
//   TOGGLE_NAV: 'TOGGLE_NAV',
//   CHANGE_NAME: 'CHANGE_NAME',
//   CHANGE_EMAIL: 'CHANGE_EMAIL',
//   CHANGE_MESSAGE: 'CHANGE_MESSAGE',
//   SUBMIT_FORM: 'SUBMIT_FORM'
// }
