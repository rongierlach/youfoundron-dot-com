import FadeIn from './FadeIn'

const baseDelay = 800
const steppedDelay = 400

const projects = [
  {
    title: 'ICO Stats: Track ICO Performance',
    src: 'https://cdn.buttercms.com/hSkIOGsqQauYaXxu5l3i',
    url: 'https://icostats.com/',
    description: `
      <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>
      <p>A frequently trafficked webapp for purchasing tokens and analyzing ICO statistics. Utilizes <em>React</em>, <em>Redux</em>, <em>GraphQL</em>, <em>Web3</em>, and the <em>ShapeShift API</em>.</p>
      <p>Shared frequently on <a class='sans-serif link fw9 black hover-gold' href='https://www.reddit.com/r/icocrypto/comments/6ednmu/ico_stats_httpsicostatscom/'>Reddit</a>.</p>
    `
  },
  {
    title: 'Porsche: Only A Sports Car',
    src: 'https://d2wzhk7xhrnk1x.cloudfront.net/H2PCszAgSauLD0RQ7INH_porsche.png',
    url: 'https://onlyasportscar.com',
    description: `
      <h3 class='mt0 sans-serif tracked-tight'>Front-End Development</h3>
      <p>An animation and analytics heavy micro-site promoting Porsche's spring sportscar lineup, overseen by Cramer-Krasselt and The Uprising Creative. Utilizes <em>React</em>, <em>React Router</em>, <em>Redux Sagas</em>, <em>PostCSS</em>, and <em>GreenSock</em>.</p>
    `
  },
  {
    title: 'Sonos + Spotify: Playlist Potluck',
    src: 'https://d2wzhk7xhrnk1x.cloudfront.net/MCuHwOGoQdGsGE2iW04V_sonos.png',
    url: 'https://playlistpotluck.sonos.com/',
    description: `
    <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>
    <p>A webapp for starting and sharing collaborative playlists with friends overseen by Cornerstone and The Uprising Creative. Utilizes <em>Node</em>, <em>MongoDB</em>, <em>React</em>, <em>Redux</em>, <em>SCSS</em>, and the <em>Spotify API</em>.</p>
    <p>Featured in <a class='sans-serif link fw9 black hover-gold' href='https://techcrunch.com/2016/11/16/spotifys-playlist-potluck-is-a-collaborative-playlist-for-your-parties/'>TechCrunch</a>.</p>
    `
  },
  {
    title: 'Nike: Techknit Interactive Timeline',
    src: 'https://d2wzhk7xhrnk1x.cloudfront.net/ecTuIr4NRYqfrpQYxMlC_niketechknit.png',
    url: 'http://www.niketechknit.com/',
    description: `
      <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>
      <p>A blog-embedded interactive piece that allows a user to scrub through over a thousand photos tied to time-stamped biometric data. Overseen by Studio 424 and The Uprising Creative. Utilizes <em>jQuery</em>, <em>SASS</em>, and the <em>FitBit API</em>.</p>
      <p>Featured in <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://news.nike.com/news/nike-tech-knit-nike-sportswear-s-latest-innovation'>Nike News</a>.</p>
    `
  },
  // {
  //   title: 'BEHR, Color Clinic',
  //   src: '',
  //   url: '',
  //   description: `
  //     <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>
  //
  //   `
  // },
  {
    title: 'Modest Mouse: Linguistic Remix Generator',
    src: 'https://d2wzhk7xhrnk1x.cloudfront.net/vv39LidT1e3MwRHbzwh9_modestmouse.png',
    url: 'http://strangers.modestmouse.com/',
    description: `
      <h3 class='mt0 sans-serif tracked-tight'>Back-End Development</h3>
      <p>A conceptual interactive webapp for algorithmically generating music. Overseen by The Uprising Creative. Utilizes <em>Node</em>, <em>MongoDB</em>, <em>Ampersand</em>, <em>Web Audio</em>, <em>Canvas</em>, and the <em>Twitter API</em>.</p>
      <p>Featured in
        <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://pitchfork.com/news/58885-modest-mouse-launch-strangers-to-ourselves-linguistic-remix-generator/'>Pitchfork</a>
        and
        <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://www.stereogum.com/1788295/modest-mouse-launch-a-strangers-to-ourselves-linguistic-remix-generator/news/'>Stereogum</a>.
      </p>
    `
  }
  // {
  //   title: 'Converse Rubber Tracks',
  //   src: '',
  //   url: '',
  //   description: `
  //     <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>
  //   `
  // }
]

const WorkList = ({posts, activated}) => (
  <ol className='list pl0'>
    {projects.map(({title, description, src, url}, i) => (
      <li key={i}>
        <FadeIn id={`project-${i}`} direction='left' delay={baseDelay + i * steppedDelay}>
          <div className='flex flex-column flex-row-ns mb2 pt4 b--black-20 bt'>
            <div className='pr3-ns mb0 w-100 w-third-ns'>
              <a href={url} target='_blank' className='link near-white hover-gold w-100 dt sans-serif'>
                <img
                  className='db'
                  alt={description}
                  src={src || 'https://placeholdit.co//i/1024x576'}
                />
                <h3 className='f4 f5-ns lh-title tc tr-ns'>
                  <span className='bg-near-black lh-copy pa1 tracked-tight'>
                    {title}
                  </span>
                </h3>
              </a>
            </div>
            <div
              className='w-100 w-two-thirds-ns pl3-ns pt0 f6 f5-l lh-copy near-black georgia'
              dangerouslySetInnerHTML={{__html: description}}
            />
          </div>
        </FadeIn>
      </li>
    ))}
    <style jsx>{`.mt-1 { margin-top: -1em; }`}</style>
  </ol>
)

export default WorkList
