import Header from './Header'
import Footer from './Footer'

const Layout = ({children, ...props}) => (
  <div {...props}>
    <Header />
    <div className='ph3 ph5-ns pv5'>
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
