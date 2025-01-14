import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Contact = () => {

     const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm()
          const onSubmit = (data) => console.log(data)
  return (
    <div className='w-[90vw] mx-auto  py-4 my-10 h-screen flex justify-center '>
     <div className=' w-full md:w-[30%] px-4 rounded-md '>
        
        <div className='py-10 mt-20' >
       
        <h3 className="font-bold text-2xl">Contact</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-8 space-y-2'>
                <p >Name</p>
                <input type="text"
                 placeholder='Enter your name'
                 className=' px-3 border rounded-md outline-none py-1 w-full' 
                 {...register("name", { required: true })}/>
                  <br />
                  {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            
            <div className='mt-4 space-y-2'>
                <p >Email</p>
                <input type="email"
                 placeholder='Enter your email'
                 className=' px-3 border rounded-md outline-none py-1 w-full'
                 {...register("email", { required: true })} />
                  <br />
                  {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
        
            {/*password*/}
        
            <div className='mt-8 space-y-2'>
                <p >Message</p>
                <textarea name="" placeholder='Type your message'  rows="5"
                className=' px-3 border rounded-md outline-none py-1 w-full' ></textarea>
            </div>

           
        
            <div className='mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 
              hover:bg-pink-700 duration-200'>Submit</button>
              
            </div>

        </form>

        
            </div>
            </div>
    </div>
  )
}

export default Contact
