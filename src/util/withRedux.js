import React from 'react'
import { connect, Provider } from 'react-redux'

import createStore from '../store'
import _initialState from '../store/initialState'

const skipMerge = {
  initialState: true,
  initialProps: true,
  isServer: true,
  store: true
}
const storeKey = '__NEXT_REDUX_STORE__'

const initStore = (makeStore, req, initialState) => {
  // Always make a new store if server
  const isServer = !!req && typeof window === 'undefined'
  const hasServerStore = isServer && !!req._store
  if (isServer) {
    if (!hasServerStore) {
      req._store = makeStore(initialState)
    }
    return req._store
  }

  // Memoize store if client
  const hasClientStore = window[storeKey]
  if (!hasClientStore) {
    window[storeKey] = makeStore(initialState)
  }

  return window[storeKey]
}

const wrapWithProvider = store => (Cmp, props) => (
  <Provider store={store}>
    <Cmp {...props} />
  </Provider>
)

export default (Cmp, ...connectArgs) => {
  const ConnectedCmp = connectArgs.length === 0
    ? Cmp
    : connect(...connectArgs)(Cmp)

  const WrappedCmp = props => {
    props = props || {}
    const initialState = props.initialState || _initialState
    const initialProps = props.initialProps || {}
    const hasStore = props.store && props.store.dispatch && props.store.getState
    const store = hasStore
      ? props.store
      : initStore(createStore, {}, initialState)

    // Fix for _document
    const mergedProps = Object.keys(props)
      .reduce((mergedObj, key) => {
        if (!skipMerge[key]) {
          mergedObj[key] = props[key]
        }
        return mergedObj
      }, initialProps)

    return wrapWithProvider(store)(ConnectedCmp, mergedProps)
  }

  WrappedCmp.getInitialProps = async ctx => {
    const res = await new Promise((resolve, reject) => {
      const isServer = !!ctx.req
      const store = initStore(createStore, ctx.req)
      const req = ctx.req
      const initialProps = Cmp.getInitialProps ? Cmp.getInitialProps(ctx) : {}
      resolve(Promise.all([isServer, store, req, initialProps]))
    })
    const [isServer, store, req, initialProps] = res // eslint-disable-line no-unused-vars
    const initialState = store.getState() // eslint-disable-line no-unused-vars
    return {
      isServer,
      store,
      // initialState,
      initialProps
    }
  }

  return WrappedCmp
}
