import {Head as NextHead} from 'next/document'
import locals from '../locals'

// https://github.com/joshbuchea/HEAD#meta
const Head = ({children}) => (
  <NextHead>
    <meta charSet='utf-8' />
    <meta httpEquiv='x-ua-compatible' content='ie=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />
    <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.min.css' />
    <link rel='icon' type='image/x-icon' href='/static/favicon.ico' />

    {/* Put children first to establish tag precedence */}
    {children}

    {/* fallback to title and description from locals */}
    <title>{locals.title}</title>
    <meta name='description' content={locals.description} />

    <meta property='og:type' content='website' />
    <meta property='og:locale' content='en_US' />
    <meta property='article:author' content='Ron Gierlach' />

    {/* facebook open graph meta */}
    <meta property='og:title' content={locals.title} />
    <meta property='og:description' content={locals.description} />
    <meta property='og:url' content={locals.facebook.url} />
    <meta property='og:image' content={locals.facebook.image} />

    {/* twitter card meta */}
    <meta name='twitter:card' content={locals.twitter.card} />
    <meta name='twitter:site' content={locals.twitter.site} />
    <meta name='twitter:creator' content={locals.twitter.creator} />
  </NextHead>
)

export default Head
