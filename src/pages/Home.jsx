import React from "react";
import ManSvg from "../components/ManSvg";
// import NewsImg from "../components/NewsImg";
import angular from "../assets/images/angular-8-new-features_.png";
import vsCode from "../assets/images/visual-studio-logo.png";
import nest from "../assets/images/nest.png";
import node from "../assets/images/nodejs.png";

import WomanSvg from "../components/WomanSvg";
import Button from "../components/Button";

const Home = () => {

  return (
    <>
      <section dir="rtl" className="mt-32 flex flex-col items-center justify-center">
        <div className="flexjustify-center relative">
          <WomanSvg />
          <h1 className="newsTitle">اخبار و مقالات</h1>
          <ManSvg />
        </div>
        <div className="mt-32 flex">
          <span className="absolute rounded-2xl py-6 right-[285px] top-[405px] px-10 font-vazirmatn text-3xl shadow-md">اخبار</span>
          <div className="flex flex-col pt-[106px] items-end shadow-md rounded-3xl p-5">
            <ul>
              <li className="flex items-center border-b pl-32 py-4">
                <img className="ml-8" src={angular} alt="" />
                <span className="font-vazirmatnExLight">آموزشگاه در تدارک دوره های جدید برنامه نویسی است</span>
              </li>
              <li className="flex items-center border-b pl-32 py-4">
                <img className="ml-8" src={nest} alt="" />
                <span className="font-vazirmatnExLight">آموزشگاه در تدارک دوره های جدید برنامه نویسی است</span>
              </li>
              <li className="flex justify-start items-center pl-32 py-4">
                <img className="ml-8" src={node} alt="" />
                <span className="font-vazirmatnExLight">آموزشگاه در تدارک دوره های جدید برنامه نویسی است</span>
              </li>
            </ul>
            <Button className={'outline-btn'}>بیشتر</Button>
          </div>
          <span className="absolute left-[780px] top-[405px] rounded-2xl py-6 px-8 font-vazirmatn text-3xl shadow-md">مقالات</span>
          <div className="flex flex-col items-end shadow-md rounded-3xl pt-[106px] mr-6 p-5">
            <ul>
              <li className="flex justify-center items-center border-b pl-32 py-4">
                <img className="ml-8" src={vsCode} alt="" />
                <span className="font-vazirmatnExLight">بیست وبسایت برتر در زمینه عکس هاو آیکون های رایگان</span>
              </li>
              <li className="flex justify-center items-center border-b pl-32 py-4">
                <img className="ml-8" src={nest} alt="" />
                <span className="font-vazirmatnExLight">
                  بیست وبسایت برتر در زمینه عکس هاو آیکون های رایگان
                </span>
              </li>
              <li className="flex justify-center items-center pl-32 py-4">
                <img className="ml-8" src={angular} alt="" />
                <span className="font-vazirmatnExLight">بیست وبسایت برتر در زمینه عکس هاو آیکون های رایگان</span>
              </li>
            </ul>
            <Button className={'outline-btn'}>بیشتر</Button>
          </div>
        </div>
          <div className="mt-24 mb-56 flex items-center justify-center border rounded-2xl px-28 h-[89px]">
            <span className="font-vazirmatnBold text-2xl text-btn-purple mx-8">عضویت در خبرنامه:</span>
            <input 
            className="news-input" 
            type="text" placeholder="enter your email address"/>
          </div>
      </section>

    </>
  );
};

export default Home;
