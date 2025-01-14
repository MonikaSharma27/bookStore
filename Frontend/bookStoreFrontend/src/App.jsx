import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"
import Course from './components/Course'
import Signup from "./components/Signup"


const App = () => {
  return (
    <div >
     <Navbar/>

<Routes>
  <Route path='/' element={<Banner/>}/>
  <Route path='/course' element={<Course/>}/>
  <Route path='/signup' element={<Signup/>}/>

  
</Routes>
     <Footer/>
    </div>
  )
}

export default App