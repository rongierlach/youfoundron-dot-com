import { createSelector } from 'reselect'

export const selectNavStatus = state => (
  state.get('nav')
)

export const selectNavExpanded = createSelector(
  selectNavStatus,
  nav => nav.get('expanded')
)

export const selectContactStatus = state => (
  state.get('contact')
)

export const selectContactForm = createSelector(
  selectContactStatus,
  contact => contact.get('form')
)

export const selectContactName = createSelector(
  selectContactForm,
  form => form.get('name')
)

export const selectContactEmail = createSelector(
  selectContactForm,
  form => form.get('email')
)

export const selectContactMessage = createSelector(
  selectContactForm,
  form => form.get('message')
)
