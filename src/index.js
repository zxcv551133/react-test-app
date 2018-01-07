import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')
ReactDOM.render(<App headerTitle='Welcome!'
  contentTitle='Stranger,'
  contentBody='Welcome to example app' />, rootElement)
registerServiceWorker()
