import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <h3 className="font-bold text-2xl">Login</h3>
    <div className='mt-4 space-y-2'>
        <p >Email</p>
        <input type="email"
         placeholder='Enter your email'
         className='w-[80%] px-3 border rounded-md outline-none py-1' 
         {...register("email", { required: true })}/>
         <br />
          {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    {/*password*/}

    <div className='mt-4 space-y-2'>
        <p >Password</p>
        <input type="password"
         placeholder='Enter your password'
         className='w-[80%] px-3 border rounded-md outline-none py-1'
         {...register("password", { required: true })} />
         <br />
          {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    <div className='flex justify-around items-start mt-7'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login </button>
      <p>Not registered? <Link to="/signup"><span className='underline text-blue-500 cursor-pointer'>Signup</span></Link></p>
    </div>

    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
