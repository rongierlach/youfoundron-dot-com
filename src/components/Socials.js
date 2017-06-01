import GitHubSVG from './GitHubSVG'
import LinkedInSVG from './LinkedInSVG'
import CodePenSVG from './CodePenSVG'

const Socials = () => (
  <section className='pv4 ph3 tc'>
    <a
      className='black grow dib mh3'
      href='https://www.codepen.io/youfoundron'
      target='_blank'
      title='CodePen'
    ><CodePenSVG /></a>
    <a
      className='black grow dib mh3'
      href='https://github.com/rongierlach'
      target='_blank'
      title='GitHub'
    ><GitHubSVG /></a>
    <a
      className='black grow dib mh3'
      href='https://www.linkedin.com/in/rongierlach'
      target='_blank'
      title='LinkedIn'
    ><LinkedInSVG /></a>
  </section>
)

export default Socials
