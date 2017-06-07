import { createSelector } from 'reselect'

export const selectNavStatus = state => (
  state.get('nav')
)

export const selectNavExpanded = createSelector(
  selectNavStatus,
  nav => nav.get('expanded')
)

export const selectContactFormStatus = state => (
  state.get('contactForm')
)

export const selectContactName = createSelector(
  selectContactFormStatus,
  contactForm => contactForm.get('name')
)

export const selectContactEmail = createSelector(
  selectContactFormStatus,
  contactForm => contactForm.get('email')
)

export const selectContactMessage = createSelector(
  selectContactFormStatus,
  contactForm => contactForm.get('message')
)
