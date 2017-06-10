import m from 'moment'
import Head from 'next/head'
import cheerio from 'cheerio'

import Error from './_error'
import Layout from '../src/components/Layout.js'
import FadeIn from '../src/components/FadeIn.js'
import CMS from '../src/util/CMS'
import withRedux from '../src/util/withRedux'

const elementClassNames = {
  'p': 'f5 f4-ns lh-copy georgia',
  'a': 'ml0 link near-black hover-gold',
  'blockquote': 'ml0 f6 f5-ns lh-copy i pl4 bl bw1 b--gold mb4'
}

const normalizeElement = (i, elm) => {
  const classNames = elementClassNames[elm.name]
  if (classNames) {
    const elmClass = elm.attribs.class || ''
    elm.attribs.class = elmClass + ' ' + classNames
  }
  return elm
}

const normalizeBody = body => {
  const $ = cheerio.load(body)('body')
  return $.contents().map(normalizeElement)
}

const Post = ({ error, post = {} }) => (
  error
  ? <Error {...error} />
  : <Layout containerClassName='pa0'>
    <Head>
      <title>{post.seo_title}</title>
      <meta name='description' content={post.meta_description} />
      <link rel='stylesheet' type='text/css' href='http://d2z2rr99bkshyr.cloudfront.net/buttercms-post-defaults.css' />
      <style>{`
        .align-center {
          text-align: center;
        }
      `}</style>
    </Head>
    <article>
      <header className='bg-gold sans-serif'>
        <FadeIn id='header' direction='right' >
          <div className='mw9 center pa4 pt5-ns ph4 ph7-l'>
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
      <section className='mw9 center pa4 pt5-ns ph4 ph7-l'>
        <FadeIn id='body' delay={500} direction='up'>
          <div
            className='bg-near-white georgia center'
            dangerouslySetInnerHTML={{__html: normalizeBody(post.body)}}
          />
        </FadeIn>
      </section>
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
