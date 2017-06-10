import Head from 'next/head'

import withRedux from '../src/util/withRedux'
import Layout from '../src/components/Layout'
import FadeIn from '../src/components/FadeIn'

const Error = ({statusCode, statusText}) => (
  <Layout>
    <Head>
      <title>Error</title>
    </Head>
    <FadeIn id='error'>
      <section className='measure center'>
        <h1 className='tc tracked-tight f-headline lh-solid mb0'>{statusCode}</h1>
        <p className='tc georgia i f5 f4-ns lh-copy'>{statusText}</p>
      </section>
    </FadeIn>
  </Layout>
)

Error.getInitialProps = ({ res, jsonPageRes }) => {
  const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : 404)
  const statusText = 'Nothing to see here!'
  return { statusCode, statusText }
}

export default withRedux(Error)
