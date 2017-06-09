import { Component } from 'react'
import { Router } from '../routes'

import collect from '../util/collect'
import { selectNavIsSmall, selectNavExpanded } from '../constants/selectors'

const smallWidth = 480

const pushRoute = (routeName, cb) => e => {
  e.preventDefault()
  Router.pushRoute(routeName)
  if (typeof cb === 'function') cb()
}

class Header extends Component {
  state = { canExpand: false }

  header = undefined
  handleResize = ({target = window} = {}) => {
    const innerWidth = target.innerWidth
    const { isSmall, resetNav, setSmall } = this.props
    if (isSmall === undefined) {
      setSmall(innerWidth < smallWidth)
    } else if (!isSmall && innerWidth < smallWidth) {
      setSmall(true)
    } else if (isSmall && innerWidth >= smallWidth) {
      resetNav()
      setSmall(false)
    }
  }

  componentWillMount () {
    if (this.props.expanded !== undefined) {
      this.props.resetNav()
    }
  }

  componentDidMount () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    const { isSmall, expanded, closeNav, toggleNav } = this.props
    const pushRouteCb = expanded === true ? closeNav : null
    return (
      <header className='bg-near-black' ref={elm => { this.header = elm }}>
        <nav className='dt dt--fixed w-100 border-box pa3 ph5-m ph6-l bg-inherit bb b--near-black shadow-3'>
          <div className='dtc dn-ns w-third' />
          <div className='dtc v-mid mid-gray w-third w-20-ns tc tl-ns mb2 mb0-ns'>
            <a
              title='Home'
              onClick={pushRoute('home', pushRouteCb)}
              className='pointer'
            >
              <img className='grow-large dib w2 h2 br-100 pa1' alt='Home' src='/static/zap.png' />
            </a>
          </div>
          <div
            onClick={closeNav}
            className={`
              ${expanded ? 'db' : 'dn'}
              w-100 h-100 top-0 left-0 absolute
            `}
          />
          <div
            className={`
              ${expanded
                ? isSmall ? 'expand' : 'db'
                : isSmall
                  ? expanded === undefined ? 'dn' : 'retract'
                  : 'dn'
              }
              shelf bg-inherit static-ns absolute left-0 dtc-ns v-mid w-100 w-75-ns h-80 tr top-4
            `}
          >
            <a
              title='Work'
              onClick={pushRoute('work', pushRouteCb)}
              className={`
                ${expanded ? 'bt b--dark-gray' : ''}
                pointer link near-white hover-gold tc tr-ns tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 mr4-ns ttu tracked fw6 b--none-ns
              `}
            >Work</a>
            <a
              title='Blog'
              onClick={pushRoute('blog', pushRouteCb)}
              className='pointer link near-white hover-gold tc tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 mr4-ns ttu tracked fw6 bt b--dark-gray b--none-ns'
            >Blog</a>
            <a
              title='Contact'
              onClick={pushRoute('contact', pushRouteCb)}
              className='pointer link near-white hover-gold tc tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 ttu tracked fw6 bt b--dark-gray b--none-ns'
            >Contact</a>
          </div>
          <a
            title='Toggle Nav'
            onClick={toggleNav}
            className='pointer h2 dtc fr tr v-mid dn-ns w-third p0-ns white'
          >
            <span className={expanded
              ? 'trans db w-close h-close bg-near-white absolute rotate-45 mr2 mt-close'
              : 'trans db w2 mt2 mb2 bw2 pb2 bt bb b--near-white'
            } />
            <span className={expanded
              ? 'trans db w-close h-close bg-near-white absolute rotate--45 mr2 mt-close'
              : 'trans db w2 mt1 bw2 pb0 bt b--near-white'
            } />
          </a>
        </nav>
        <style jsx>{`
          .top-4 { top: 4.5rem; }
          .trans { transition: 0.3s; }
          .w-close { width: 2.5rem; }
          .h-close { height: .25rem; }
          .mt-close { margin-top: 1.25rem; }
          .rotate--45 { transform: rotate(-45deg); }
          .expand { display: block; }
          .retract { display: none; }
          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-out-up {
            0% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(-20px);
            }
          }
          @media only screen and (max-width: 30em) {
            .expand {
              animation-name: fade-in-down;
              animation-duration: .3s;
              animation-timing-function: ease-in-out;
            }
            .retract {
              display: block;
              opacity: 0;
              pointer-events: none;
              animation-name: fade-out-up;
              animation-duration: .3s;
              animation-timing-function: ease-out;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default collect(
  [['actions', 'setSmall']],
  [['actions', 'closeNav']],
  [['actions', 'resetNav']],
  [['actions', 'toggleNav']],
  [selectNavIsSmall, 'isSmall'],
  [selectNavExpanded, 'expanded']
)(Header)
