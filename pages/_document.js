import Document, { Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import Head from '../src/components/Head'

export default class extends Document {
  static getInitialProps ({renderPage}) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return {html, head, errorHtml, chunks, styles}
  }

  render () {
    return (
      <html>
        <Head />
        <body className='w-100 sans-serif near-black bg-near-white'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
