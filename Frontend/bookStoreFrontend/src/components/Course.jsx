import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'


const Course = () => {
  
  return (
    <div className=' w-[90vw] mx-auto  py-4 my-10'>
     <div className=' mt-16 md:mt-28  text-center'>
      <h1 className='text-2xl  md:text-4xl'>We're delighted to have you 
        <span className='text-pink-500'> Here! :)</span></h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo provident 
          eligendi facere in necessitatibus ducimus dolore optio cumque doloribus tempore sapiente ut, magni quibusdam
           blanditiis aut, est at voluptates?
        Modi libero perspiciatis veniam nostrum. Quaerat natus veniam, a labore dolorum
         ipsam maxime numquam facere unde! Temporibus totam nihil aliquid non tempore. Dolore deserunt iste ullam? 
         Corrupti aliquam repellat eum.</p>
         <Link to="/">
         <button className='bg-pink-500 text-white px-5 py-2 rounded-md
          hover:bg-pink-700 duration-300 mt-6'>Back</button>
         </Link>
         
     </div>

     <div className='grid grid-cols-1 md:grid-cols-4'>
      {
      list.map((item)=>(
        
      <Cards key={item.id} item={item}/>
      ))
      }
     </div>

    </div>
  )
}

export default Course
