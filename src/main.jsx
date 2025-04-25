import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import NodeJSRoadmap from  './NodeJSRoadmap.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NodeJSRoadmap />
  </StrictMode>,
)
