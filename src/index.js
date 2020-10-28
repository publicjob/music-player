import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import { store } from './store'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/history'

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>

</Provider>, document.querySelector('#root'))