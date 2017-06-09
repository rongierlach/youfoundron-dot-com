import Header from './Header'
import Footer from './Footer'

const Layout = ({children, containerClassName}) => (
  <div className='flex flex-column min-vh-100'>
    <Header />
    <main className={'flex-auto ' + (containerClassName || 'ph3 ph5-ns pv5')}>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
