import NextDocument, { Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import Head from '../src/components/Head'

class Document extends NextDocument {
  static getInitialProps ({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return {html, head, errorHtml, chunks, styles}
  }

  render () {
    return (
      <html>
        <Head />
        <body className='w-100 sans-serif bg-white'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Document
