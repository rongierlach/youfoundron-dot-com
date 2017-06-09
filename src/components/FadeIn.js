import { Component } from 'react'
import PropTypes from 'prop-types'

export default class FadeIn extends Component {
  state = { activated: false }
  delayTimer = undefined

  static propTypes = {
    id: PropTypes.string.isRequired
  }

  static defaultProps = {
    delay: 0,
    duration: '1s',
    direction: ''
  }

  componentDidMount () {
    this.delayTimer = setTimeout(() => {
      this.setState(state => ({activated: true}))
    }, Number(this.props.delay))
  }

  componentWillUnount () {
    clearTimeout(this.delayTimer)
  }

  render () {
    const { id, children, direction, duration } = this.props
    const { activated } = this.state

    return (
      <div className={activated ? `${id}-activated` : `${id}-deactivated`}>
        {children}
        <style global jsx>{`
          @keyframes fade-in {
            0%   { opacity: 0 }
            100% { opacity: 1 }
          }
          @keyframes fade-in-left {
            0% {
              opacity: 0;
              transform: translateX(-20px)
            }
            100% {
              opacity: 1;
              transform: translateX(0)
            }
          }
          @keyframes fade-in-right{
            0% {
              opacity: 0;
              transform: translateX(20px)
            }
            100% {
              opacity: 1;
              transform: translateX(0)
            }
          }
          @keyframes fade-in-up {
            0% {
              opacity: 0;
              transform: translateY(20px)
            }
            100% {
              opacity: 1;
              transform: translateY(0)
            }
          }
          @keyframes fade-in-down {
            0% {
              opacity: 0;
              transform: translateY(-20px)
            }
            100% {
              opacity: 1;
              transform: translateY(0)
            }
          }
        `}</style>
        <style>{`
          .${id}-activated {
            animation-duration: ${typeof duration === 'number' ? `${duration}s` : duration};
            animation-name: ${direction ? `fade-in-${direction}` : 'fade-in'};
          }
          .${id}-deactivated {
            opacity: 0;
            transition: ${typeof duration === 'number' ? `${duration}s` : duration};
          }
        `}</style>
      </div>
    )
  }
}
