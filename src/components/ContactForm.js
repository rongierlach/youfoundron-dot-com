import collect from '../util/collect'
import {
  selectContactName,
  selectContactEmail,
  selectContactMessage
} from '../constants/selectors'

const ContactForm = ({
  name,
  email,
  message,
  changeName,
  changeEmail,
  changeMessage
}) => (
  <form>
    <label className='f6 b db mb2'>
      Name <span className='normal black-60'>(optional)</span>
    </label>
    <input
      name='name'
      type='text'
      value={name}
      onChange={changeName}
      className='outline-0 input-reset ba b--black-20 pa2 mb2 db w-100'
    />
    <label className='f6 b db mb2'>Email</label>
    <input
      required
      name='email'
      type='email'
      value={email}
      onChange={changeEmail}
      className='outline-0 input-reset ba b--black-20 pa2 mb2 db w-100'
    />
    <label className='f6 b db mb2'>Message</label>
    <textarea
      required
      name='message'
      value={message}
      onChange={changeMessage}
      className='outline-0 border-box ba b--black-20 pa2 mb3 br0 db w-100 h4 mw-100'
    />
    <button
      type='submit'
      className='link pointer tracked sans-serif f4 b pa2 mb3 w-100 ttu bw3 near-white hover-gold bg-near-black b--near-black hover-bg-near-black'
    >Submit</button>
  </form>
)

export default collect(
  [['actions', 'changeName']],
  [['actions', 'changeEmail']],
  [['actions', 'changeMessage']],
  [selectContactName, 'name'],
  [selectContactEmail, 'email'],
  [selectContactMessage, 'message']
)(ContactForm)
