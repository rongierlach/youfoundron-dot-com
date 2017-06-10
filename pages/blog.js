import Head from 'next/head'

import Layout from '../src/components/Layout.js'
import FadeIn from '../src/components/FadeIn'
import PostList from '../src/components/PostList'
import CMS from '../src/util/CMS'
import withRedux from '../src/util/withRedux'

const Blog = ({ data }) => (
  <Layout>
    <Head>
      <title>Blog</title>
    </Head>
    <FadeIn id='blog' direction='up'>
      <section className='mw7-ns center'>
        <h1>Blog</h1>
        <hr />
        <PostList posts={data} />
      </section>
    </FadeIn>
  </Layout>
)

Blog.getInitialProps = async ({query = {}}) => {
  const {
    page = 1,
    page_size = 10, // eslint-disable-line camelcase
    exclude_body = true, // eslint-disable-line camelcase
    query: search,
    ...params
  } = query
  const action = !search ? 'list' : 'search'
  const args = !search
    ? [{page, page_size, exclude_body, ...params}]
    : [search, {page, page_size, exclude_body, ...params}]

  const res = await CMS.post[action](...args)
  return res.data
}

export default withRedux(Blog)
