import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'
import { DataProvider } from './context/GlobalData.jsx'
import Search from './pages/search.jsx'
import Details from './pages/Details.jsx'
import UserRegistration from './pages/UserRegistration.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/perfil' element={<Profile />} />
            <Route path='/cadastro' element={<UserRegistration />} />
            <Route path='/search' element={<Search />} />
            <Route path='/restaurant/details/:id' element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
