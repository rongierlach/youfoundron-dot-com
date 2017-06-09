import { Component } from 'react'
import Head from 'next/head'

import withRedux from '../src/util/withRedux'
import Layout from '../src/components/Layout'
import FadeIn from '../src/components/FadeIn'

class Error extends Component {
  static getInitialProps ({ res, jsonPageRes }) {
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : 404)
    return { statusCode }
  }

  render () {
    return (
      <Layout>
        <Head>
          <title>Error</title>
        </Head>
        <FadeIn>
          <section className='measure center'>
            <h1 className='tc tracked-tight f-headline lh-solid mb0'>{this.props.statusCode}</h1>
            <p className='tc georgia i f5 f4-ns lh-copy'>Nothing to see here!</p>
          </section>
        </FadeIn>
      </Layout>
    )
  }
}

export default withRedux(Error)
