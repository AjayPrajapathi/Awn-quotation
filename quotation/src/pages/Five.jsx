import React from 'react'
import { images } from '../assets/asset'

const Five = () => {
  return (
     <div className="bg-[#057B86] flex  justify-around relative  w-full h-screen ">
          <div className="flex justify-between text-white ">
            <div className="flex flex-col justify-center ">
              <p className="medium-text text-[50px]">
              مــــاذا؟
              </p>
              <p className="medium-text text-[50px]">
              يشمل
              </p>
              <p className="medium-text text-[50px]">
              تسعيرك
              </p>
            </div>
          </div>
          <img
            src={images.folder}
            alt="Folder Icon"
            className="w-1/5 h-auto max-w-xs object-contain"
          />
          <div className="w-[40px] bg-[#057B86] h-[40px] absolute top-45 right-45 text-white z-20 text-3xl font-bold text-center">02</div>
          <div className="w-[40px] bg-[#C09B40] h-[420px] absolute top-55 right-45"></div>
          <hr className="w-[100%] h-[2px] bg-[#c09b40] absolute bottom-15 left-0" />
        </div>
  )
}

export default Five