import Head from 'next/head'

import Layout from '../src/components/Layout'
import withRedux from '../src/util/withRedux'

const Work = () => (
  <Layout>
    <Head>
      <title>Work</title>
    </Head>
    <section className='mw7-ns center'>
      <h1>Work</h1>
      <hr />
      <p className='lh-copy'>Previous projects include work for Nike, Air Jordan, Anheuser-Busch, Chevy, Converse, VH1, Virgin, Activision, Barclaycard, Disney, Sonos + Spotify, Porsche, Behr, and Lollapalooza.</p>
      <p className='lh-copy'>As well as major artists such as Beyoncé, Modest Mouse, System of a Down, Demi Lovato, Carly Rae Jepsen, Sean Mendes, and many more.</p>
      {/*  */}
    </section>
  </Layout>
)

export default withRedux(Work)
