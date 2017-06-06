import m from 'moment'
import {toWords} from 'number-to-words'
import Head from 'next/head'
import Link from 'next/link'

import withRedux from '../src/util/withRedux'
import Layout from '../src/components/Layout'
import Socials from '../src/components/Socials'

const yearsExperience = () => (
  toWords(m().diff('2014-05-15', 'years'))
)

const Home = () => (
  <Layout>
    <Head>
      <title>Found Him.</title>
    </Head>
    <article className='center measure'>
      <h1>Found Me.</h1>
      <hr />
      <p className='lh-copy'>
        I'm a software developer, residing in Chicago, with over {yearsExperience()} years of industry experience.
      </p>
      <p className='lh-copy'>
        I recently left my job to focus on learning Ðapp development on Ethereum.
      </p>
      <p className='lh-copy'>
        I've done varied&nbsp;
        <Link href='/work'>
          <a className='link fw9 black hover-gold'>work</a>
        </Link>
        &nbsp;for some pretty interesting clients.
      </p>
      <p className='lh-copy'>
        Sparingly, I may&nbsp;
        <Link href='/blog'>
          <a className='link fw9 black hover-gold'>write</a>
        </Link>
        &nbsp;about programming and related topics.
      </p>
      <p className='lh-copy'>
        If you're interested in working together, let's&nbsp;
        <Link href='/contact'>
          <a className='link fw9 black hover-gold'>get in touch</a>
        </Link>
        .
      </p>
    </article>
    <Socials />
  </Layout>
)

export default withRedux(Home)
