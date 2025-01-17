import React from 'react'
import { VscChromeClose } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast';

const Signup = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname||"/"

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        const userInfo = {
          fullname: data.fullname,
          email:data.email,
          password:data.password,
        }
       await axios.post("http://localhost:4001/user/signup" , userInfo)
        .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success("signup successfull");
           navigate(from, {replace:true})
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err) => {
          if(err.response){
            console.log(err);
            toast.error("Error: " + err.response.data.message);
          }
        })
      }
  return (
    <div className='w-[90vw] mx-auto  py-4 my-10 h-screen flex justify-center items-center '>
        <div className='border-2 shadow-md w-full md:w-[30%] px-4 rounded-md '>
            <div className=' flex justify-end'>
           <Link to="/"> <VscChromeClose className=' mt-3  hover:rounded-full hover:bg-gray-300 p-2 ' size={30}/></Link>
            </div>
        
        <div className='py-10' >
       
        <h3 className="font-bold text-2xl">Signup</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-8 space-y-2'>
                <p >Name</p>
                <input type="text"
                 placeholder='Enter your name'
                 className=' px-3 border rounded-md outline-none py-1 w-full' 
                 {...register("fullname", { required: true })}/>
                  <br />
                  {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
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
                <p >Password</p>
                <input type="password"
                 placeholder='Enter your password'
                 className=' px-3 border rounded-md outline-none py-1 w-full' 
                 {...register("password", { required: true })}/>
                  <br />
                  {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

           
        
            <div className='flex justify-around items-start mt-7'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
              <p>Have Account? <span 
              className='underline text-blue-500 cursor-pointer'
              onClick={()=> document.getElementById("my_modal_3").showModal()}>Login</span></p>
            </div>

        </form>

        
            </div>
            </div>
    </div>
  )
}

export default Signup




