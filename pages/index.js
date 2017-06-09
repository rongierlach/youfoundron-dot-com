import m from 'moment'
import {toWords} from 'number-to-words'
import Head from 'next/head'
import Link from 'next/link'

import withRedux from '../src/util/withRedux'
import Layout from '../src/components/Layout'
import FadeIn from '../src/components/FadeIn'
import Socials from '../src/components/Socials'

const baseDelay = 800
const steppedDelay = 400

const yearsExperience = () => (
  toWords(m().diff('2014-05-15', 'years'))
)

const Home = () => (
  <Layout>
    <Head>
      <title>Found Him.</title>
    </Head>
    <FadeIn id='blurb' direction='up'>
      <article className='center measure georgia'>
        <h1 className='sans-serif'>Found Me.</h1>
        <hr />
        <FadeIn id='p1' direction='left' delay={baseDelay + 1 * steppedDelay}>
          <p className='f5 f4-ns lh-copy'>
            I'm a software developer, residing in Chicago, with over {yearsExperience()} years of industry experience.
          </p>
        </FadeIn>
        <FadeIn id='p2' direction='left' delay={baseDelay + 2 * steppedDelay}>
          <p className='f5 f4-ns lh-copy'>
            I'm currently spending my time learning Ðapp development in Ethereum.
          </p>
        </FadeIn>
        <FadeIn id='p3' direction='left' delay={baseDelay + 3 * steppedDelay}>
          <p className='f5 f4-ns lh-copy'>
            I've done varied&nbsp;
            <Link href='/work'>
              <a className='sans-serif link fw9 black hover-gold'>work</a>
            </Link>
            &nbsp;for some pretty interesting clients.
          </p>
        </FadeIn>
        <FadeIn id='p4' direction='left' delay={baseDelay + 4 * steppedDelay}>
          <p className='f5 f4-ns lh-copy'>
            Sparingly, I may&nbsp;
            <Link href='/blog'>
              <a className='sans-serif link fw9 black hover-gold'>write</a>
            </Link>
            &nbsp;about programming and related topics.
          </p>
        </FadeIn>
        <FadeIn id='p5' direction='left' delay={baseDelay + 5 * steppedDelay}>
          <p className='f5 f4-ns lh-copy'>
            If you're interested in working together, or just feel like talking shop, let's&nbsp;
            <Link href='/contact'>
              <a className='sans-serif link fw9 black hover-gold'>get in touch</a>
            </Link>
            .
          </p>
        </FadeIn>
      </article>
      <FadeIn id='socials' duration='2s' delay={1300 + 6 * steppedDelay}>
        <Socials />
      </FadeIn>
    </FadeIn>
  </Layout>
)

export default withRedux(Home)
