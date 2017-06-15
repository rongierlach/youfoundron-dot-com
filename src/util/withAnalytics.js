import ReactGA from 'react-ga'
import { Component } from 'react'

// https://developers.google.com/analytics/devguides/collection/analyticsjs/
export const initGA = () => {
  ReactGA.initialize(process.env.GA_TRACKING_ID)
}

export const logPageView = () => {
  console.log(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}

export default Cmp => (
  class extends Component {
    componentDidMount () {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
    render () {
      return <Cmp {...this.props} />
    }
  }
)
