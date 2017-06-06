import Head from 'next/head'
// import Link from 'next/link'

// import CMS from '../src/util/CMS'
import Layout from '../src/components/Layout.js'
import withRedux from '../src/util/withRedux'

const Blog = () => (
  <Layout>
    <Head>
      <title>Blog</title>
    </Head>
    <section className='mw7-ns center'>
      <h1>Blog</h1>
      <hr />
    </section>
    {/* <PostList /> */}
  </Layout>
)

// Blog.getInitialProps = async context => {
  // const posts = []
  // const {
  //   page = 1,
  //   page_size = 10,
  //   query
  // } = context.query

//   const action = !context.query ? 'list' : 'search'
//   const res = await CMS.post[action](context.query)
//   return res.data
// }

export default withRedux(Blog)
