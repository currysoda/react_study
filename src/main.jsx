import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // DOM tree 에 react 를 연결하기 위함
  // main.jsx 는 react 의 최초 진입점
  <StrictMode>
    <App />
  </StrictMode>,
)
