import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css';
import { SideBar } from './components/SideBar/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SideBar>
    <App />
    </SideBar>
  </React.StrictMode>,
)
