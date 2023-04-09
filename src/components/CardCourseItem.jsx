import React from "react";
import vsCode from "../assets/images/visual-studio-logo.png";
import RecycleBin from "../assets/images/RecycleBin.png";

const CardCourseItem = () => {
  return (
    <div
      dir="rtl"
      className="container mx-auto flex justify-center items-center mt-32">
      <ul className="shadow-3xl rounded-2xl bg-lightgrey w-[1021px]">
        <li className="flex justify-between items-center my-[37px] mx-[33px] bg-white rounded-2xl py-[14px] px-4">
          <div className="flex items-center">
            <img src={vsCode} alt="" />
            <div className="pr-6">
              <p className="font-vazirmatnExLight text-l pb-1">
                دوره نکست جی اس مقدماتی از صفر تا
              </p>
              <p className="font-vazirmatnExLight text-l">
                مدرس دوره : استاد بحری
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="font-shabnam text-xl">45000</span>
            <span className="font-vazirmatnLight text-xl pr-1">تومان</span>
            <span className="pr-[38px] pl-[41px]">
              <img src={RecycleBin} alt="" />
            </span>
          </div>
        </li>
        <li className="flex justify-between items-center my-[37px] mx-[33px] bg-white rounded-2xl py-[14px] px-4">
          <div className="flex items-center">
            <img src={vsCode} alt="" />
            <div className="pr-6">
              <p className="font-vazirmatnExLight text-l pb-1">
                دوره نکست جی اس مقدماتی از صفر تا
              </p>
              <p className="font-vazirmatnExLight text-l">
                مدرس دوره : استاد بحری
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="font-shabnam text-xl">45000</span>
            <span className="font-vazirmatnLight text-xl pr-1">تومان</span>
            <span className="pr-[38px] pl-[41px]">
              <img src={RecycleBin} alt="" />
            </span>
          </div>
        </li>
        <li className="flex justify-between items-center my-[37px] mx-[33px] bg-white rounded-2xl py-[14px] px-4">
          <div className="flex items-center">
            <img src={vsCode} alt="" />
            <div className="pr-6">
              <p className="font-vazirmatnExLight text-l pb-1">
                دوره نکست جی اس مقدماتی از صفر تا
              </p>
              <p className="font-vazirmatnExLight text-l">
                مدرس دوره : استاد بحری
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="font-shabnam text-xl">45000</span>
            <span className="font-vazirmatnLight text-xl pr-1">تومان</span>
            <span className="pr-[38px] pl-[41px]">
              <img src={RecycleBin} alt="" />
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardCourseItem;

{
  /* <li className='flex items-center my-[37px] mx-[33px] bg-white rounded-2xl py-[14px] px-4'>
<div>
  <img src={vsCode} alt="" />
</div>
<div className='flex justify-between items-center'>
    <div>
      <p>دوره نکست جی اس مقدماتی از صفر تا</p>
      <p>مدرس دوره : استاد بحری</p>
    </div>
    <div className=''>
      <span>recycle bin</span>
      <span>price</span>
    </div>
</div>
</li> */
}
