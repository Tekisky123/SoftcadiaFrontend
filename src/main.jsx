import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './AuthContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserProvider>
 </React.StrictMode>
)

