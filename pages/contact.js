import Head from 'next/head'

import withRedux from '../src/util/withRedux'
import Layout from '../src/components/Layout'
import ContactForm from '../src/components/ContactForm'

const Contact = () => (
  <Layout>
    <Head>
      <title>Contact</title>
    </Head>
    <section className='measure center'>
      <h1>Contact</h1>
      <hr />
      <ContactForm />
    </section>
  </Layout>
)

export default withRedux(Contact)
