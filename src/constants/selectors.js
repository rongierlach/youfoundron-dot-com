import { createSelector } from 'reselect'

export const selectNavStatus = state => (
  state.get('nav')
)

export const selectNavIsSmall = createSelector(
  selectNavStatus,
  nav => nav.get('isSmall')
)

export const selectNavExpanded = createSelector(
  selectNavStatus,
  nav => nav.get('expanded')
)

export const selectBlogStatus = state => (
  state.get('blog')
)
