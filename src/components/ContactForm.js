import { Component } from 'react'
import FadeIn from './FadeIn'

class ContactForm extends Component {
  constructor (props) {
    super(props)
    this.state = { submitted: false }
    this.setSubmitted = this.setSubmitted.bind(this)
  }
  setSubmitted () {
    this.setState({ submitted: true })
  }
  render () {
    return (
      this.state.submitted
      ? <FadeIn id='thankyou'>
        <h1 className='tracked-tight f-headline lh-solid mb0 tc'>Thanks!</h1>
        <p className='georgia i f4-ns lh-copy tc'>
          We'll be in touch shortly.
          {/* Still working on the mail server but I appreciate you wanting to reach out. You can email me directly at <a href='mailto:ron@youfoundron.com?Subject=Contact%20Form' target='_top' className='sans-serif link fw9 black hover-gold'>ron@youfoundron.com</a> */}
        </p>
        {/* <p className='georgia i f4-ns lh-copy'>If my resume is what you're looking for, click <a href='https://d2wzhk7xhrnk1x.cloudfront.net/2qbkT7ctRP2pffqktFM8_resume.pdf' target='_blank' className='sans-serif link fw9 black hover-gold'>here</a>.</p> */}
      </FadeIn>
      : <form
        method='POST'
        action='http://formspree.io/rongierlach@gmail.com'
        // onSubmit={}
      >
        <label className='f6 b db mb2'>
          Name <span className='normal black-60'>(optional)</span>
        </label>
        <input
          name='name'
          type='text'
          className='outline-0 input-reset ba b--black-20 pa2 mb2 db w-100 br0 georgia'
          autoFocus
        />
        <label className='f6 b db mb2'>Email</label>
        <input
          required
          name='email'
          type='email'
          className='outline-0 input-reset ba b--black-20 pa2 mb2 db w-100 br0 georgia'
        />
        <label className='f6 b db mb2'>Message</label>
        <textarea
          required
          name='message'
          className='input-reset outline-0 border-box ba b--black-20 pa2 mb3 br0 db w-100 h4 mw-100 georgia'
        />
        <button
          type='submit'
          className='button-reset link pointer tracked sans-serif f4 b pa2 mb3 w-100 ttu bw3 near-white hover-gold bg-near-black b--solid b--near-black hover-bg-near-black'
        >Submit</button>
      </form>
    )
  }
}

export default ContactForm
