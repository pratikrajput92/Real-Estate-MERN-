// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Properties from './Pages/Properties';
import PropertyDetails from './Pages/PropertyDetails';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/properties' element={<Properties/>} />
        <Route path='/property/:id' element={<PropertyDetails />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App;
