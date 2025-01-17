import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from "react-router-dom"
import Course from './components/Course'
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


const App = () => {

  const [authUser, setAuthUser]= useAuth()
console.log(authUser)
  return (
    <div >
     <Navbar/>
     
     <Routes>
  <Route path='/' element={<Banner/>}/>
  <Route path='/course' element={authUser?<Course/>:<Navigate to="/signup"/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
   
<Toaster />
    
     <Footer/>
    
    

    
     
    </div>
  )
}

export default App
