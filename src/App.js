import React from 'react'
import ReactDOM from 'react-dom'
import App from './'
import {Suspense} from 'react'

ReactDOM.render(
  <React.Fragment>
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </React.Fragment>,
  document.getElementById('app')
)
