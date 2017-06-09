import Head from 'next/head'

import withRedux from '../src/util/withRedux'
import Layout from '../src/components/Layout'
import FadeIn from '../src/components/FadeIn'
import ContactForm from '../src/components/ContactForm'

const Contact = () => (
  <Layout>
    <Head>
      <title>Contact</title>
      {/* <script src='https://www.google.com/recaptcha/api.js' /> */}
    </Head>
    <FadeIn id='contact' direction='up'>
      <section className='measure center'>
        <h1>Contact</h1>
        <hr />
        <ContactForm />
      </section>
    </FadeIn>
  </Layout>
)

export default withRedux(Contact)
