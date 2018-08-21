import { createStore, applyMiddleware } from 'redux'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'

import { rootReducer, defaultState } from './ducks/ducks'
import { rootSaga } from './saga/rootSaga'
import { loadAllCookies } from '../tools/utils'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line global-require, import/no-extraneous-dependencies
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

export function configureStore(initialState = defaultState, options) {
    const cookies = loadAllCookies(options)
    const { token, email, role, permissions, id } = cookies
    initialState.cookie = cookies // eslint-disable-line no-param-reassign
    // eslint-disable-next-line no-param-reassign
    initialState.auth = {
      token,
      email,
      role,
      id,
      permissions,
      loading: false,
      error: {},
    }
    const store = createStore(
        rootReducer,
        initialState,
        bindMiddleware([sagaMiddleware])
      )
    
    store.runSagaTask = () => {
       store.sagaTask = sagaMiddleware.run(rootSaga)
    }
    store.runSagaTask()
    
    return store
}
    
export function withReduxSaga(BaseComponent) {
    return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}
