import { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  constructor (...args) {
    super(...args)
    this.state = { expanded: false }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav (e) {
    e.preventDefault()
    this.setState(state => ({
      expanded: !state.expanded
    }))
  }

  render () {
    const { expanded } = this.state
    return (
      <header className='bg-near-black'>
        <nav className='dt dt--fixed w-100 border-box pa3 ph5-ns bg-inherit bb b--black-10 shadow-3'>
          <div className='dtc dn-ns w-third' />
          <div className='dtc v-mid mid-gray w-third w-25-ns tc tl-ns mb2 mb0-ns'>
            <Link href='/' prefetch>
              <a title='Home'>
                <img className='grow dib w2 h2 br-100 bg-white pa1' alt='Home' src='/static/zap.png' />
              </a>
            </Link>
          </div>
          <div
            style={{top: 12, transition: '0.2s'}}
            className={`
              ${expanded ? 'db' : 'dn'}
              bg-inherit static-ns absolute left-0 mt5 mt0-ns dtc-ns v-mid w-100 w-75-ns h-80 tr
            `}
          >
            <Link href='/work' prefetch>
              <a
                title='Work'
                className='link hover-gold white tc tr-ns tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 mr4-ns ttu tracked fw6'
              >Work</a>
            </Link>
            <Link href='/blog' prefetch>
              <a
                title='Blog'
                className='link hover-gold white tc tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 mr4-ns ttu tracked fw6 bt b--dark-gray b--none-ns'
              >Blog</a>
            </Link>
            <Link href='/contact' prefetch>
              <a
                title='Contact'
                className='link hover-gold white tc tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 ttu tracked fw6 bt b--dark-gray b--none-ns'
              >Contact</a>
            </Link>
          </div>
          <a
            href='#'
            onClick={this.toggleNav}
            className='h2 dtc fr tr v-mid dn-ns w-third p0-ns white'
          >
            <span style={{transition: '0.2s'}} className={expanded
              ? 'db w-close h-close bg-white absolute rotate-45 mr2 mt-close'
              : 'db w2 mt2 mb2 bw2 pb2 bt bb b--white'
            } />
            <span style={{transition: '0.2s'}} className={expanded
              ? 'db w-close h-close bg-white absolute rotate--45 mr2 mt-close'
              : 'db w2 mt1 bw2 pb0 bt b--white'
            } />
          </a>
        </nav>
        <style>{`
          .w-close { width: 2.5rem; }
          .h-close { height: .25rem; }
          .mt-close { margin-top: 1.25rem; }
          .rotate--45 { transform: rotate(-45deg); }
        `}</style>
      </header>
    )
  }
}

export default Header
