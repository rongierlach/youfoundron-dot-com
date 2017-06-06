import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => (
  <div className='flex flex-column min-vh-100' >
    <Header />
    <main className='ph3 ph5-ns pv5 flex-auto'>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
