import {connect} from 'react-redux'
import wrapWithProvider from './wrapWithProvider'

export default (Component, ...connectArgs) => (
  wrapWithProvider(connect(...connectArgs)(Component))
)
