import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './fonts/MabryPro-Bold.ttf'
import './fonts/MabryPro-Regular.ttf'
import './fonts/MabryPro-Medium.ttf'
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
