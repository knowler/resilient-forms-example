import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '@components'
import 'preact/debug'

ReactDOM.render(<App />, document.body)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}
