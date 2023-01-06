import React from 'react'
import ReactDOM from 'react-dom/client'
import Dev1 from './Dev1'
import Dev2 from './Dev2'
import Dev3 from './Dev3'
import Dev4 from './Dev4'
import Dev5 from './Dev5'
import Dev6 from './Dev6'
import Dev7 from './Dev7'
import Dev8 from './Dev8'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='mainDiv'>
      <Dev1 />
      <Dev2 />
      <Dev3 />
      <Dev4 />
      <Dev5 />
      <Dev6 />
      <Dev7 />
      <Dev8 />
    </div>
  </React.StrictMode>,
)
