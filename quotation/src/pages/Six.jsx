import React from "react";
import { images } from "../assets/asset";

const Six = () => {
  return (
    <div dir="ltr" className="section">
      <div dir="rtl" className="details-section">
        <p className="details-heading">
          باقة ادارة شؤون السجل التجاري الحكومية
        </p>
        <div className="detail-box">
          <div className="sub-box">
            <h1 className="list-heading"> ننفذها عند طلبك</h1>
            {/* <ul> */}

            <p>حجزوتعديل اسم تجاري</p>
            <p>اصدار سجل تجاري</p>
            <p>تحديث وتعديل وشطب السجل التجاري</p>
            <p>فتح فروع وتحول نوع السجل من رئيسي إلىفرعي أو العكس</p>
            <p>تحويل من شركة الى مؤسسة</p>
            <p>تحويل من مؤسسة الى شركة</p>
            <p>االستشاريةاصدارووتعديل والغاء رخصة المهن</p>
            <p>تعديل عقود التأسيس</p>
            <p>طلبات الموافقة على العروض الترويجية</p>
            <p>نقل ملكية السجل التجاري</p>
            {/* </ul> */}
          </div>
          <div className="sub-box">
            <h1 className="list-heading">اننفذها تلقائي</h1>
            {/* <ul> */}

            <p>تجديد السجل التجاري</p>
            <p>تجدديد رخصة المهن االستشارية</p>
            {/* </ul> */}
          </div>
        </div>
      </div>
      <div dir="rtl" className="company">
        <h2 className="company-heading">ماذا يشمل تسعيرك ؟</h2>
        <div className="company-images">
          <img src={images.ministryOfCommerce} height={"30%"} width={"80%"} />
        </div>
      </div>
    </div>
  );
};

export default Six;
