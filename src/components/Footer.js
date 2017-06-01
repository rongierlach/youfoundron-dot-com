import m from 'moment'
import Link from 'next/link'

const Spacer = () => (
  <span>
    &nbsp;/&nbsp;
  </span>
)

const Footer = () => (
  <footer className='bg-near-black white-60 pv4 pv5-m pv6-l ph4'>
    <p className='db dib-ns mr4 mr5-ns f7'>
      © {m().year()} Ron Gierlach
    </p>
    <p className='db dib-ns tr-ns f7 fr-ns'>
      <Link href='/home'>
        <a className='link white-60 dim'> Home </a>
      </Link>
      <Spacer />
      <Link href='/work'>
        <a className='link white-60 dim'> Work </a>
      </Link>
      <Spacer />
      <Link href='/blog'>
        <a className='link white-60 dim'> Blog </a>
      </Link>
      <Spacer />
      <Link href='/contact'>
        <a className='link white-60 dim'> Contact </a>
      </Link>
    </p>
    <p className='f7'>
      <a className='link white-80 dim' href='https://github.com/rongierlach/youfoundron-dot-com' target='_blank'>Site</a>
      &nbsp;built with&nbsp;
      <a className='link white-80 dim' href='http://github.com/zeit/next.js/' target='_blank'>Next.js</a>
      ,&nbsp;
      <a className='link white-80 dim' href='http://tachyons.io/' target='_blank'>Tachyons</a>
      &nbsp;and&nbsp;
      <a className='link white-80 dim' href='http://buttercms.com/' target='_blank'>ButterCMS</a>
    </p>
  </footer>
)

export default Footer
