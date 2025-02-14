import React from 'react'
import { images } from '../assets/asset'

const Ten = () => {
  return (
    <div dir="ltr" className="section">
      <div dir="rtl" className="details-section">
        <p className="details-heading">باقة ادارة شؤون العاملين الحكومية</p>
        <div className="detail-box">
       
          <div className="sub-box">
            <h1 className="list-heading">ننفذها عند طلبك
            </h1>
            <p>اصدار اقامة جديدة</p>
            <p>اصدار وتمديد والغاء التأشيرات</p>
            <p>تعديل البيانات والمسميات</p>
            <p>نقل المعلومات </p>
            <p style={{marginBottom:"40px"}}>نقل الخدمات وتعديل المهنة
            </p>
            <p>
            اصدار والغاء التأمين الطبي للموظفينوذويهم
            </p>
            <p>خفص او رفع فئة التأمين الطبي للموظفينوذويهم </p>
            <p>تغيير جهة التأمين الطبي</p>
          </div>
          <div className="sub-box">
            <h1 className="list-heading">

            ننفذها تلقائيًا

            </h1>
            <p>تجديد االقامات</p>
            <p style={{marginBottom:"158px"}}>تجديد اشتراك ابشر اعمال / مقيم</p>
            <p> تجديد التأمينات الطبية للموظفين وذويهم</p>
          </div>

        </div>
      </div>
      <div dir="rtl" className="company">
        <h2 className="company-heading">ماذا يشمل تسعيرك ؟</h2>
         <div className="company-images flex  justify-around items-center space-x-6 h-screen mt-[-20px]">
                     
                  <img src={images.absher} alt="Riyad Chamber" className="w-[80%] h-[30%] object-contain  border-b-2 border-black" />
                  <img src={images.tameeni} alt="SPL" className="w-[50%] h-[30%] object-contain" />
                </div>
      </div>
    </div>
  )
}

export default Ten