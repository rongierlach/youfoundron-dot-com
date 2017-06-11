import m from 'moment'
import { Link } from '../routes'
import FadeIn from './FadeIn'

const baseDelay = 800
const steppedDelay = 400

const PostList = ({posts, activated}) => (
  <ol className='list pl0'>
    {posts.map(({slug, title, summary, published}, i) => (
      <li key={i}>
        <FadeIn id={`post-${i}`} direction='left' delay={baseDelay + i * steppedDelay}>
          <Link route='post' params={{slug}}>
            <a className='link near-white hover-gold w-100 dt'>
              <div className='pa2 pl0 dtc v-mid mw-60'>
                <h3 className='f3'>
                  <span className='bg-near-black lh-copy pa1 tracked-tight'>
                    {title}
                  </span>
                </h3>
                <p className='georgia dn db-ns i near-black mt-1'>{summary}</p>
              </div>
              <div className='pa2 pr0 dtc v-mid nowrap'>
                <p className='dn db-ns near-black hover-near-black tr'>
                  &nbsp;― {m(published).format('DD MMMM, YYYY')}
                </p>
                <p className='db dn-ns near-black hover-near-black tr'>
                  &nbsp;― {m(published).format('DD/MM/YYYY')}
                </p>
              </div>
            </a>
          </Link>
        </FadeIn>
      </li>
    ))}
    <style jsx>{`.mt-1 { margin-top: -1em; }`}</style>
  </ol>
)

export default PostList
