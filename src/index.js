import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './react/containers/App'
import configureStore from './react/redux/configureStore'
import serviceWorker from './serviceWorker';

const store = configureStore()

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./react/containers/App', renderApp)
}

renderApp()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();