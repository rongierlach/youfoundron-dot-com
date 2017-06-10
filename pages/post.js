import m from 'moment'
import Head from 'next/head'
import cheerio from 'cheerio'

import Error from './_error'
import Layout from '../src/components/Layout.js'
import FadeIn from '../src/components/FadeIn.js'
import CMS from '../src/util/CMS'
import withRedux from '../src/util/withRedux'

// const selectionsWithClasses = [
//   ['p', 'f5 f3-ns lh-copy'],
//   ['blockquote', 'f6 f5-ns lh-copy i pl4 bl bw1 b--gold mb4'],
//   ['a', 'link near-black hover-gold']
// ]

const normalizeBody = body => {
  const $ = cheerio.load(body)('body')
  // console.log($.html())
  return body
}

const Post = ({ error, post = {} }) => (
  error
  ? <Error {...error} />
  : <Layout containerClassName='pa0'>
    <Head>
      <title>{post.seo_title}</title>
      <meta name='description' content={post.meta_description} />
    </Head>
    <article>
      <header className='bg-gold sans-serif'>
        <FadeIn id='header' direction='right' >
          <div className='mw9 center pa4 pt5-ns ph4 ph5-m ph6-l'>
            <time className='f6 mb2 dib ttu tracked'>
              <small>{m(post.published).format('DD MMMM, YYYY')}</small>
            </time>
            <h3 className='f2 f1-m f-headline-l measure-narrow lh-title mv0'>
              <span className='bg-near-black lh-copy near-white pa1 tracked-tight'>
                {post.title}
              </span>
            </h3>
            <h4 className='f3 fw1 georgia i'>
              {post.summary}
            </h4>
            <h5 className='f6 ttu tracked near-black'>
              By {post.author.first_name} {post.author.last_name}
            </h5>
          </div>
        </FadeIn>
      </header>
      <FadeIn id='body' delay={500} direction='up'>
        <div
          className='bg-near-white pa4 ph7-l georgia mw9-l center measure'
          dangerouslySetInnerHTML={{__html: normalizeBody(post.body)}}
        />
      </FadeIn>
    </article>
  </Layout>
)

Post.getInitialProps = async ({query: {slug}}) => {
  try {
    const res = await CMS.post.retrieve(slug)
    return { post: res.data.data }
  } catch (err) {
    const error = { statusCode: err.status, statusText: err.statusText }
    return { error }
  }
}

export default withRedux(Post)
