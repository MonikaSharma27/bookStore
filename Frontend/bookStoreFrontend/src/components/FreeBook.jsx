import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios"

const FreeBook = () => {
   const [book, setBook ]= useState ([])
   useEffect(()=>{
     const getBook = async()=>{
       try{
      const res = await axios.get("http://localhost:4001/book");
         console.log(res.data)
         setBook (res.data.filter((data) => data.category === "Free"))
       }catch(error){
        console.log(error)
       }
     }
     getBook()
   },[])
  
   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (

    <div  className=" w-[90vw] mx-auto py-4 my-10">
        <div>
        <h1 className='text-xl pb-2 font-semibold'>Free Offered Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore reiciendis mollitia, labore tempore quos culpa voluptatem in est inventore at atque explicabo sequi dolorem, dolor necessitatibus qui corrupti deserunt?</p>
        </div>
        
      <div>
      <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
              
      </div>
    </div>


   

  )
}

export default FreeBook
