import React from "react";
import { images } from "../assets/asset";

const Eight = () => {
  return (
    <div dir="ltr" className="section">
      <div dir="rtl" className="details-section">
        <p className="details-heading">باقة ادارة شؤون السجل التجاري الحكومية</p>
        <div className="detail-box">
          <div className="sub-box">
            <h1 className="list-heading"> ننفذها عند طلبك</h1>
            <p>اصدار وتعديل والغاء رخصة النشاط التجاري</p>
            <p>نقل ملكية رخصة النشاط التجاري</p>
            <p>اصدار رخصة عربة متنقلة</p>
            <p style={{ borderBottom: "none", marginBottom: "20px" }}>
              االعتراض على المخالفات
            </p>
            <p>خدمة الرخص</p>
            <p>خدمة مزايا</p>
            <p>خدمات االمتياز التجاري</p>
            <p>خدمات بوابة التمويل</p>
            <p style={{ borderBottom: "none", marginBottom: "20px" }}>
              خدمات تأهيل المنشآت الصغيرة والمتوسطة
            </p>
            <p>فتح حساب مستثمر سعودي
            </p>
            <p>فتح فروع او مركز تسويق
            </p>
            <p >تحديث البيانات الحكومية
            </p >
            <p  style={{ borderBottom: "none", marginBottom: "20px" }}>تعديل الموقع والبريد االلكتروني</p>
          </div>
          <div className="sub-box">
            <h1 className="list-heading">
            ننفذها تلقائيا

            </h1>
            <p style={{marginBottom:"137px"}}>تجديد رخص النشاط التجاري</p>
            <p>تجديد شهادة حجم المنشأة</p>
          </div>
        </div>
      </div>
      <div dir="rtl" className="company">
        <h2 className="company-heading">ماذا يشمل تسعيرك ؟
        </h2>
        <div className="company-images flex items-center justify-center space-x-6 h-screen">
             
          <img src={images.balady} alt="Riyad Chamber" className="w-[80%] h-[30%] object-contain  border-b-2 border-black" />
          <img src={images.monshaat} alt="Zakat & Tax" className="w-[80%] h-[35%] object-contain border-b-2 border-black" />
          <img src={images.ministryOfInvestment} alt="SPL" className="w-[80%] h-[30%] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Eight;
