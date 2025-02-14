import React from "react";
import { images } from "../assets/asset";

const Seven = () => {
  return (
    <div dir="ltr" className="section">
      <div dir="rtl" className="details-section">
        <p className="details-heading">
          {" "}
          باقة ادارة شؤون السجل التجاري الحكومية
        </p>
        <div className="detail-box">
          <div className="sub-box">
            <h1 className="list-heading"> ننفذها عند طلبك</h1>
            <p>التصديق الوئاثق والتواقيع وطلبات وزارةالخارجية</p>
            <p>تحديث وتعديل بيانات المنشأة</p>
            <p>تحديث وتعديل بيانات المنشأة</p>
            <p style={{ borderBottom: "none", marginBottom: "20px" }}>
              رفع او تخفيض درجة المنشأة
            </p>
            {/* <br/> */}
            <p>تعديل فترة االقرارات الضريبية</p>
            <p>رفع طلبات التقسيط</p>
            <p>رفع طلبات استرداد الضريبة</p>
            <p>رفع طلبات االعتراضات على الغرامات</p>
            <p>الغاء التسجيل ضريبة القيمة المضافة</p>{" "}
            <p style={{ borderBottom: "none", marginBottom: "20px" }}>
              اضافة والغاء الفروع
            </p>
            {/* <br/> */}
            <p>التسجيل في العنوان الوطني</p>
            <p>تعديل وتحديث العنوان الوطني</p>
          </div>
          <div className="sub-box">
            {/* <h1 className="list-heading"></h1> */}
            <h1 className="list-heading">ننفذها تلقائيا</h1>
            <br />
            <br />
            <br />
            <p>رفع االقرارت الزكوية</p>

            <p>رفع االقرارات الضريبية</p>
            <p style={{ marginBottom: "48px" }}>تحديث الشهادات</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>جديد العنوان الوطني</p>
          </div>
        </div>
      </div>
      <div dir="rtl" className="company">
        <h2 className="company-heading">ماذا يشمل تسعيرك ؟</h2>
        {/* <div className="company-images">
          <img  src={images.riyadChamber}  />
          <img src={images.zakattax} />
          <img src={images.spl} />
        </div> */}
        <div className="company-images flex items-center justify-center space-x-6 h-screen">
     
  <img src={images.riyadChamber} alt="Riyad Chamber" className="w-[80%] h-[30%] object-contain  border-b-2 border-black" />
  <img src={images.zakattax} alt="Zakat & Tax" className="w-[80%] h-[35%] object-contain border-b-2 border-black" />
  <img src={images.spl} alt="SPL" className="w-[80%] h-[30%] object-contain" />
</div>
      </div>
    </div>
  );
};

export default Seven;
