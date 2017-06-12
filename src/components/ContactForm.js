import collect from '../util/collect'
import {
  selectContactName,
  selectContactEmail,
  selectContactMessage,
  selectSubmittedStatus
} from '../constants/selectors'

import FadeIn from './FadeIn'

const ContactForm = ({
  name,
  email,
  message,
  submitted,
  changeName,
  changeEmail,
  changeMessage,
  submitForm
}) => (
  submitted
  ? <FadeIn id='thankyou'>
    <h1 className='tracked-tight f-headline lh-solid mb0 tc'>Whoops!</h1>
    <p className='georgia i f4-ns lh-copy'>
      Still working on the mail server but I appreciate you wanting to reach out. You can email me directly at <a href='mailto:ron@youfoundron.com?Subject=Contact%20Form' target='_top' className='sans-serif link fw9 black hover-gold'>ron@youfoundron.com</a>
    </p>
    <p className='georgia i f4-ns lh-copy'>If my resume is what you're looking for, click <a href='https://d2wzhk7xhrnk1x.cloudfront.net/2qbkT7ctRP2pffqktFM8_resume.pdf' target='_blank' className='sans-serif link fw9 black hover-gold'>here</a>.</p>
  </FadeIn>
  : <form action='/contact' method='post' onSubmit={submitForm}>
    <label className='f6 b db mb2'>
      Name <span className='normal black-60'>(optional)</span>
    </label>
    <input
      name='name'
      type='text'
      value={name}
      onChange={changeName}
      className='outline-0 input-reset ba b--black-20 pa2 mb2 db w-100 br0 georgia'
      autoFocus
    />
    <label className='f6 b db mb2'>Email</label>
    <input
      required
      name='email'
      type='email'
      value={email}
      onChange={changeEmail}
      className='outline-0 input-reset ba b--black-20 pa2 mb2 db w-100 br0 georgia'
    />
    <label className='f6 b db mb2'>Message</label>
    <textarea
      required
      name='message'
      value={message}
      onChange={changeMessage}
      className='input-reset outline-0 border-box ba b--black-20 pa2 mb3 br0 db w-100 h4 mw-100 georgia'
    />
    <button
      type='submit'
      className='button-reset link pointer tracked sans-serif f4 b pa2 mb3 w-100 ttu bw3 near-white hover-gold bg-near-black b--solid b--near-black hover-bg-near-black'
    >Submit</button>
  </form>
)

export default collect(
  [['actions', 'changeName']],
  [['actions', 'changeEmail']],
  [['actions', 'changeMessage']],
  [['actions', 'submitForm']],
  [selectContactName, 'name'],
  [selectContactEmail, 'email'],
  [selectContactMessage, 'message'],
  [selectSubmittedStatus, 'submitted']
)(ContactForm)
