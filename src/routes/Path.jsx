import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import ContactTable from '../components/ContactTable'

const Path = () => {
  return (
    <div>
        <Navbar/>
        <ContactTable/>
        {/* <BrowserRouter>
          <Routes>
            <Route to='/' element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter> */}
    </div>
  )
}

export default Path