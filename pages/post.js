import React from 'react'
import m from 'moment'
import Head from 'next/head'
import Prism from 'prismjs'
import { Parser, ProcessNodeDefinitions } from 'html-to-react'

import Error from './_error'
import Layout from '../src/components/Layout.js'
import FadeIn from '../src/components/FadeIn.js'
import CMS from '../src/util/CMS'
import withRedux from '../src/util/withRedux'

const parentNameClassNamePairs = [
  ['p', 'f5 f4-ns lh-copy georgia'],
  ['a', 'ml0 fw9 link black hover-gold sans-serif'],
  ['blockquote', 'ml0 f6 f5-ns lh-copy i pl4 bl bw1 b--gold mb4']
]

const getLanguageFromNode = node => (
  node.parent.attribs.class.match(/language-(.*)/)[1]
)
const isValidNode = () => true
const isCodeBlock = node => (
  node.name === 'code' &&
  node.parent && node.parent.name === 'pre' &&
  getLanguageFromNode(node)
)
const processNodeDefinitions = new ProcessNodeDefinitions(React)
const processingInstructions = [
  // inject classNames for relevant elements
  ...parentNameClassNamePairs.map(([parentName, className]) => ({
    shouldProcessNode: node => node && node.name === parentName,
    processNode: (node, children, i) => React.createElement(
      node.name,
      {...node.attribs, style: {}, className, key: i},
      children
    )
  })),
  // apply syntax highlighting to code blocks
  {
    shouldProcessNode: isCodeBlock,
    processNode: (node, children, i) => {
      const [ code ] = children
      const language = getLanguageFromNode(node)
      const highlightedHTML = Prism.highlight(code, Prism.languages[language])
      const props = {dangerouslySetInnerHTML: {__html: highlightedHTML}, key: i}
      return React.createElement('code', props)
    }
  },
  // Anything else, passthrough
  {
    shouldProcessNode: isValidNode,
    processNode: processNodeDefinitions.processDefaultNode
  }
]
const postBodyParser = new Parser()

const postBodyToComponent = body => (
  postBodyParser.parseWithInstructions(
    body,
    isValidNode,
    processingInstructions
  )
)

const Post = ({ error, post = {} }) => (
  error
  ? <Error {...error} />
  : <Layout containerClassName='pa0'>
    <Head>
      <title>{post.seo_title}</title>
      <meta name='description' content={post.meta_description} />
      <link rel='stylesheet' type='text/css' href='https://d2z2rr99bkshyr.cloudfront.net/buttercms-post-defaults.css' />
      <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.6/plugins/codesample/css/prism.css' />
      <style>{`
        .align-center {
          text-align: center;
        }
        p code {
          padding: 2px 4px;
          font-size: 90%;
          color: #c7254e;
          background-color: #f9f2f4;
          border-radius: 4px;
          font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
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
          <div className='bg-near-white georgia center'>
            { postBodyToComponent(post.body) }
          </div>
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
