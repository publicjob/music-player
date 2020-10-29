import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store/history'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(<Provider store={store}>
  <PersistGate persistor={persistor}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </PersistGate>
</Provider>, document.querySelector('#root'))