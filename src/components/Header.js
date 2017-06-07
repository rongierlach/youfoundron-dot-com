import { Router } from '../routes'

import collect from '../util/collect'
import { selectNavExpanded } from '../constants/selectors'

const pushRoute = (routeName, cb) => e => {
  e.preventDefault()
  Router.pushRoute(routeName)
  cb()
}

const Header = ({expanded, closeNav, toggleNav}) => (
  <header className='bg-near-black'>
    <nav className='dt dt--fixed w-100 border-box pa3 ph5-ns bg-inherit bb b--near-black shadow-3'>
      <div className='dtc dn-ns w-third' />
      <div className='dtc v-mid mid-gray w-third w-25-ns tc tl-ns mb2 mb0-ns'>
        <a
          title='Home'
          onClick={pushRoute('home', closeNav)}
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
        style={{top: 12, transition: '0.2s'}}
        className={`
          ${expanded ? 'db' : 'dn'}
          bg-inherit static-ns absolute left-0 mt5 mt0-ns dtc-ns v-mid w-100 w-75-ns h-80 tr
        `}
      >
        <a
          title='Work'
          onClick={pushRoute('work', closeNav)}
          className='pointer link near-white hover-gold tc tr-ns tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 mr4-ns ttu tracked fw6'
        >Work</a>
        <a
          title='Blog'
          onClick={pushRoute('blog', closeNav)}
          className='pointer link near-white hover-gold tc tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 mr4-ns ttu tracked fw6 bt b--dark-gray b--none-ns'
        >Blog</a>
        <a
          title='Contact'
          onClick={pushRoute('contact', closeNav)}
          className='pointer link near-white hover-gold tc tl-ns f3 f5-ns db dib-ns pv3 pv1-ns mr0 ttu tracked fw6 bt b--dark-gray b--none-ns'
        >Contact</a>
      </div>
      <a
        title='Toggle Nav'
        onClick={toggleNav}
        className='pointer h2 dtc fr tr v-mid dn-ns w-third p0-ns white'
      >
        <span style={{transition: '0.2s'}} className={expanded
          ? 'db w-close h-close bg-near-white absolute rotate-45 mr2 mt-close'
          : 'db w2 mt2 mb2 bw2 pb2 bt bb b--near-white'
        } />
        <span style={{transition: '0.2s'}} className={expanded
          ? 'db w-close h-close bg-near-white absolute rotate--45 mr2 mt-close'
          : 'db w2 mt1 bw2 pb0 bt b--near-white'
        } />
      </a>
    </nav>
    <style jsx>{`
      .w-close { width: 2.5rem; }
      .h-close { height: .25rem; }
      .mt-close { margin-top: 1.25rem; }
      .rotate--45 { transform: rotate(-45deg); }
    `}</style>
  </header>
)

export default collect(
  [['actions', 'closeNav']],
  [['actions', 'toggleNav']],
  [selectNavExpanded, 'expanded']
)(Header)
