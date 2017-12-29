import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'

import routes from './routes'
import configureStore from './store/configureStore'
import initialState from './reducers/initialState'

firebase.initializeApp({
  apiKey: "AIzaSyB24yEn71gfCLf6klZa5hBaEKIf8HYrE44",
  authDomain: "ecommerce-a1282.firebaseapp.com",
  databaseURL: "https://ecommerce-a1282.firebaseio.com",
  projectId: "ecommerce-a1282",
  storageBucket: "ecommerce-a1282.appspot.com",
  messagingSenderId: "278343629139"
})

const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,

  document.getElementById('root')
)
