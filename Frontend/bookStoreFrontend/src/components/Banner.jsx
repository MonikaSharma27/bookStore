import React from "react";
import image from "../../public/book.avif";
import FreeBook from "./FreeBook";


const Banner = () => {
  return (
    <>
    <div className=" w-[90vw] mx-auto flex flex-col md:flex-row py-4 my-10">
      <div id="left" className=" md:w-[50%] mt-12 md:mt-32 order-2 md:order-1">
        <div className="space-y-12">
          <h1 className=" text-2xl md:text-4xl font-bold">
            Hello, welcome here to learn something
            <span className="text-pink-500"> new everyday!!!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            delectus! Molestiae doloribus possimus, laboriosam nobis nemo
            voluptatibus, velit cupiditate reprehenderit alias perferendis
            nostrum dolor dolore facere. Repellat magnam maxime reiciendis.
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <button className="btn  mt-6 btn-secondary">Secondary</button>
      </div>

      <div id="right" className=" md:w-[50%] order-1 ">
       <div className="w-[70%] mx-auto my-auto mt-12 md:mt-28">
        <img src={image} alt="" className="w-92 h-92"/>
       </div>
      </div>
    </div>
    <FreeBook/>
    </>
  );
};

export default Banner;
