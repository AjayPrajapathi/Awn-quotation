import React from "react";
import { images } from "../assets/asset";
const Two = () => {
  return (
    <div className="flex flex-col items-center gap-24 justify-between w-full bg-[#E6E7E9] py-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#CDCED1] to-[#E6E7E9] px-20 flex justify-center ">
        <img src={images.companyGreenLogo} />
      </div>

      {/* Content Section */}
      <div dir="rtl" className="flex flex-col items-center text-center w-full">
        <p className="medium-text text-4xl">
          اهال أســـــــــــــــــــــــــــــم العميل
        </p>
        <p className="text-2xl">أعددنا عرض التسعير الخاص بك !</p>
      </div>

      {/* Footer Section (Aligned to Right) */}
      <div className="flex justify-start w-full">
        <div className="w-[100px] h-40 bg-[#057B86]"></div>
        <div className="w-[80vw] h-40 bg-gradient-to-r from-[#E6E7E9] to-[#CDCED1] ">
          <div className="pr-6">
            <div className="flex items-center w-full text-xl mt-2">
              {/* <div className="flex "> */}

              <span className="whitespace-nowrap">ستدفع مقابل ماذا ؟</span>
              <span className="flex-grow border-dotted border-b border-black mx-2"></span>
              <span className="font-bold">01</span>
            </div>
            <div className="flex items-center w-full text-xl mt-2">
              {/* <div className="flex "> */}

              <span className="whitespace-nowrap">ماذا يشمل تسعيرك ؟</span>
              <span className="flex-grow border-dotted border-b border-black mx-2"></span>
              <span className="font-bold">02</span>
            </div>

            <div className="flex items-center w-full text-xl mt-2">
              {/* <div className="flex "> */}

              <span className="whitespace-nowrap">كيف سنقدم لك الخدمة ؟</span>
              <span className="flex-grow border-dotted border-b border-black mx-2"></span>
              <span className="font-bold">03</span>
            </div>
            <div className="flex items-center w-full text-xl mt-2">
              {/* <div className="flex "> */}

              <span className="whitespace-nowrap">كم سأدفع ؟</span>
              <span className="flex-grow border-dotted border-b border-black mx-2"></span>
              <span className="font-bold" >04</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
