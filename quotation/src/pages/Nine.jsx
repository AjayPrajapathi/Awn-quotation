import React from 'react'
import { images } from '../assets/asset'

const Nine = () => {
  return (
    <div dir="ltr" className="section">
      <div dir="rtl" className="details-section">
        <p className="details-heading">باقة ادارة شؤون العاملين الحكومية</p>
        <div className="detail-box">
       
       
          <div className="sub-box">
            <h1 className="list-heading"> ننفذها عند طلبك</h1>
            <p>اصدار التأشيرات بكافة انواعها</p>
            <p>انشاء وتوثيق وتحديث وانهاء عقود العمل
            </p>
            <p>نقل خدمات الموظفين )نقل الكفالة(
              </p>
            <p>اصدار رخص العمل</p>
            <p>تغيير وتصحيح المهن
            </p>
            <p>التبليغ عن انقطاع العمل
            </p>
            <p>انشاء لوائح العمل بأنواعها</p>
            <p>االعتراض على المخالفات</p>
            <p>تغيير نشاط المنشأة
            </p>
            <p>تعيين الموظفين على البرامج التدريبية
            </p>
            <p style={{marginBottom:"40px"}}>اضافة والغاء مواقع وتعيين الموظفين على المواقع
            </p>
            <p>االعتراض على المخالفات</p>
            <p>رفع التبريرات والتعامل معها</p>
          </div>
          <div className="sub-box">
            <h1 className="list-heading">
            ننفذها تلقائيًا </h1>
            <p>تجديد رخص العمل
            </p>
            <p>تجديد شهادة سعودة
            </p>
            <p>تجديد عقود الموظفين</p>
            <p>تجديد شهادة االلتزام بحماية االجور</p>
            <p>تجديد التقرير الشهري للمنشأة
            </p>
           
          </div>
        </div>
      </div>
      <div dir="rtl" className="company">
        <h2 className="company-heading">ماذا يشمل تسعيرك ؟</h2>
         <div className="company-images flex  justify-between space-x-6 h-screen">
             
          <img src={images.qiwa} alt="Riyad Chamber" className="w-[90%] h-[50%] object-contain  border-b-2 border-black" />
          <img src={images.mudad} alt="SPL" className="w-[90%] h-[50%] object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Nine;