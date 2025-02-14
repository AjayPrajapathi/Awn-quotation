import React from "react";
import { images } from "../assets/asset";

function One() {
  return (
   

    <div className="bg-[#057B86] flex flex-col items-center justify-between relative  w-full h-screen py-20">
      <img src={images.companyWlogo} className="h-[20%] w-[20%]" />
      <div className="flex justify-between border border-x-[#c09b40] border-y-[#057b86] h-auto w-[90%] text-white text-[15px] px-2.5">
 
        <div className="flex flex-col justify-center items-center ">
          <span className="medium-text text-[55px]">عرض سعر</span>
          <span className="text-[20px] tracking-[7px] text-[#c09b40]">QUOTATION</span>
        </div>

        <div dir="rtl" className="flex flex-col  text-end">
          <div>
         
            <span dir="rtl">شارع ايب بكر الصديق، حي العارض ،الرياض</span>&nbsp;
            <span className="text-[#c09b40]">A</span> &nbsp;
          </div>

          <div>
            <div>
             
              <span dir="ltr">058 294 0754</span>&nbsp;
              <span className="text-[#c09b40]">W</span> &nbsp;
            </div>
          </div>
          <div>

            <span dir="ltr">awn.sa</span>&nbsp;
            <span className="text-[#c09b40]">M</span> &nbsp;
          </div>
          <div>
       
            <span dir="ltr">care@awn-business.com</span>&nbsp;
            <span className="text-[#c09b40]">A</span> &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default One;
