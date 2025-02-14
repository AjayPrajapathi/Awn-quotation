import React from "react";
import { images } from "../assets/asset";

const Eleven = () => {
  return (
    <div dir="ltr" className="section">
      <div dir="rtl" className="details-section">
        <p className="details-heading">باقة ادارة شؤون العاملين الحكومية</p>
        <div className="detail-box">
          <div className="sub-box">
            <h1 className="list-heading"> ننفذها عند طلبك</h1>
            <p>تسجيل وأستبعاد مشترك</p>
            <p>تعديل بيانات وتغطية مشترك</p>
            <p>تعديل المهنة واألجر لمشترك</p>
            <p>االعتراض على المخالفات</p>
            <p>تعديل بينانات المنشأة</p>
            <p>طلبات االعفاء من غرامات التأخير</p>
            <p>نقل مششترك بين فروع المنشأة</p>
          </div>
          <div className="sub-box">
            <h1 className="list-heading">ننفذها تلقائيا</h1>
            <p>تحديث شهادة المنشأة</p>
          </div>
        </div>
      </div>
      <div dir="rtl" className="company">
        <h2 className="company-heading">ماذا يشمل تسعيرك ؟</h2>
        <div dir="ltr" className="company-images flex  justify-between  h-screen">
         
          <img
            src={images.gOfSocialInsurance}
            alt="General Organization of social insurance"
            className="w-[80%] h-[50%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Eleven;

{
  /* <div dir="ltr" className="section">
<div dir="rtl" className="details-section">
  <p className="details-heading"></p>
  <div className="detail-box">
 
    <div className="sub-box">
      <h1 className="list-heading"></h1>
      <p></p>
    </div>
    <div className="sub-box">
      <h1 className="list-heading"></h1>
      <p></p>
    </div>

  </div>
</div>
<div dir="rtl" className="company">
  <h2 className="company-heading"></h2>
</div>
</div> */
}
