import Head from 'next/head'

import Layout from '../src/components/Layout'
import FadeIn from '../src/components/FadeIn'
import WorkList from '../src/components/WorkList'
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
        <p className='f5 f4-ns lh-copy'>Previous projects include work for Nike, Disney, Anheuser-Busch, Chevy, VH1, Virgin, Activision, Barclaycard, and Lollapalooza...</p>
        <p className='f5 f4-ns lh-copy'>...as well as major artists such as Beyoncé, Modest Mouse, System of a Down, Demi Lovato, Carly Rae Jepsen, Sean Mendes, and many more.</p>
        <p className='f5 f4-ns lh-copy'>See some recent samples below.</p>
        <WorkList />
      </section>
    </FadeIn>
  </Layout>
)

export default withRedux(Work)
