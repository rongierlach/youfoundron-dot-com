import Head from 'next/head'

import Layout from '../src/components/Layout'
import FadeIn from '../src/components/FadeIn'
import withRedux from '../src/util/withRedux'

const Work = () => (
  <Layout>
    <Head>
      <title>Work</title>
    </Head>
    <FadeIn id='work' direction='up'>
      <section className='mw7-ns center georgia'>
        <h1 className='sans-serif'>Work</h1>
        <hr />
        <p className='f5 f4-ns lh-copy'>Project samples coming soon...</p>
        {/* <p className='lh-copy'>Previous projects include work for Nike, Disney, Anheuser-Busch, Chevy, Converse, VH1, Virgin, Activision, Barclaycard, Sonos + Spotify, Porsche, Behr, and Lollapalooza.</p>
        <p className='lh-copy'>As well as major artists such as Beyoncé, Modest Mouse, System of a Down, Demi Lovato, Carly Rae Jepsen, Sean Mendes, and many more.</p> */}
        {/* <div className='df'>
          <div className='fl w-100 w-50-m w-third-l'>
            Porsche
          </div>
          <div className='fl w-100 w-50-m w-third-l'>
            Nike
          </div>
          <div className='fl w-100 w-50-m w-third-l'>
            Sonos + Spotify
          </div>
          <div className='fl w-100 w-50-m w-third-l'>
            Behr
          </div>
          <div className='fl w-100 w-50-m w-third-l'>
            Modest Mouse
          </div>
          <div className='fl w-100 w-50-m w-third-l'>
            Converse
          </div>
        </div> */}
      </section>
    </FadeIn>
  </Layout>
)

export default withRedux(Work)
