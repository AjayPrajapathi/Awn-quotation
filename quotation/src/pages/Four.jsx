import React from "react";
import { images } from "../assets/asset";

export default function Four() {
  return (
    <div className="flex flex-col  w-full h-screen px-12 py-20 gap-10">
      <h1 className=" medium-text inline-block text-2xl  bg-[#e6e7e9] pr-1.5 ">ستدفع مقابل ماذا؟</h1>
      <div className="flex gap-8">
        <div className="w-[25%]">
          <div> <img src={images.shield}  className="h-32"/></div>
         {/* square-list style is in index.css */}
          <ul className="square-list">
            
            <p className="medium-text bg-[#f2f3f4] text-2xl p
            y-1">
           نحمي اعمالك منالمخالفـــات 


            </p>
            <li>
              تقاريـــر مســـتمرة واشـــعارات وتجديـــدات تلقائية للوضـــع
              الحكومي لمنشـــأتك لمواصلـــة اعمالـــك دون أي مخاوف مـــن
              الغرامـــات والعقوبات الناجمـــة عـــن عـــدم االلتزام
            </li>
            <li>
              ســـنتابع جميع حســـاباتك ونتأكد ً دومـــا من عـــدم وجـــود أي
              تجـــاوزات حكوميـــة، نتوقـــع ونرصـــد التجاوزات الحكوميـــة
              قبـــل حصولها
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
      {/* <img src={images.medical} /> */}
      <div><img src={images.pupil} className="h-32"/></div>
      
 {/* square-list style is in index.css */}
          <ul className="square-list">
            
            <p className="medium-text bg-[#f2f3f4] text-2xl py-1 pr-1.5">
            نبقيك دوما على علمدون حيـــــرة
            </p>
            <li>
              فريق خـــاص مـــن المستشـــارين بخبـــرات تتجـــاوز الــــ8
              ســـنوات فـــي الشـــؤون واالنظمـــة والقوانيـــن والتشـــريعات
              الحكوميـــة ســـيكون ً دومـــا بيـــن يديك بعـــدد استشـــارات
              مجانيـــة ال محـــدودة
            </li>
            <li>
              ســـنقدم لك تقارير شـــهرية بكل المســـتجدات في االنظمـــة
              والقوانين التـــي تخـــص قطـــاع منشـــأتك ً واختصاصـــك
              التجـــاري تحديـــدا{" "}
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
          <div> <img src={images.management}   className="h-32"/></div>
        {/* square-list style is in index.css */}
          <ul className="square-list">
            <p className="medium-text bg-[#f2f3f4] text-2xl py-1 pr-1.5">
            نخلصك منالتشتــــت </p>
            <li>
              نوفـــر لـــك مديـــر حســـاب خـــاص يخدمـــك على مـــدار
              الســـاعة يدعمه فريق متكامـــل مـــن المختصين في ا لخفا ء
            </li>
            <li>نختصـــر عليك أكثر مـــن 13 منصة حكومية في مـــكان واحد</li>
          </ul>
        </div>
        <div className="w-[25%]">
          <div>
          <img src={images.medical}  className="h-32" />
          </div>
        {/* square-list style is in index.css */}
          <ul className="square-list">
            <p className="medium-text bg-[#f2f3f4] text-2xl py-1 pr-1.5">خدمات اضافية</p>
            <li>
              قـــد تحتـــاج احيانًـــا استشـــاراتقانونية او محاســـبية
              لضمـــان التزاممنشـــأتك، شـــراكتنا فـــي عـــون مـــعافضـــل
              المحاســـبين والقانونيين لنتخذلـــك عندمـــا تحتاجهـــا
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
