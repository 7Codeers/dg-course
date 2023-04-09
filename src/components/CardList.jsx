import React, { useState } from "react";
import node from "../assets/images/nodejs.png";
import group66 from "../assets/images/Group 66.png";
import Star from "./Star";
import teacher from "../assets/images/teacher.png";
import time from "../assets/images/time.png";

import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";


const CardList = () => {


  const cardLists = [
    {
      id: "1",
      title: "دوره آموزشی نست جی اس",
      instructor: "مهدی محمدزاده",
      duration: "60",
      rating: "456,45",
      price: "854800",
    },
    {
      id: "2",
      title: "دوره آموزشی وی اس کد",
      instructor: "مهدی علوی",
      duration: "60",
      rating: "12,458",
      price: "15200",
    },
    {
      id: "3",
      title: "دوره آموزشی گراف اس کیو ال",
      instructor: "همایون مسعودی",
      duration: "60",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "4",
      title: "دوره آموزشی ری اکت",
      instructor: "مهدی محمدزاده",
      duration: "60",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "5",
      title: "دوره آموزشی نکست جی اس",
      instructor: "علی تقوایی",
      duration: "60",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "6",
      title: "دوره آموزشی نود جی اس",
      instructor: "احسان مولایی ",
      duration: "60",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "7",
      title: "دوره آموزشی تیلویند سی اس اس",
      instructor: "امین یغمایی ",
      duration: "60",
      rating: "74,7893",
      price: "854800",
    },
    {
      id: "8",
      title: "دوره آموزشی ری اکت نیتیو",
      instructor: "علی محمدعلیزاده",
      duration: "60",
      rating: "85وو450",
      price: "98700",
    },
  ];

  return (
    <div dir="rtl">
      <div className="container mx-auto grid grid-cols-1 gap-5 mt-32">
        {cardLists.map((item) => {
          return (
            <div className="flex shadow-3xl rounded-lg p-[26px]">
              <div>
                <img className="w-[531px]" src={node} alt="" />
              </div>
              {/* Here we put the photo of the course to introduce it with image end*/}
              {/* in here we will put the information about the course here it starts */}
              <div className="mr-10 flex flex-col justify-between">
                <div className="flex items-center">
                  <div>
                    <h1 className="font-vazirmatnBold text-3xl mb-7">
                      {item.title}
                    </h1>
                    <p className="font-vazirmatnExLight text-2xl">
                      آموزشگاه در تدارک دوره های جدید برنامه نویسی است های جدید
                      آموزشگاه در تدارک دوره های جدید برنامه نویسی است های جدید
                      آموزشگاه در تدارک دوره های جدید برنامه نویسی است های جدید
                      برنامه
                    </p>
                  </div>
                  {/* listed prices rounded starts */}
                  <div>
                    <ul className="rounded-3xl py-3 shadow-3xl text-center h-[116px]">
                      <li className="p-1 w-[47px]">
                        <img className="m-auto" src={group66} alt="" />
                      </li>
                      <li className="p-1 bg-lightgrey w-[47px]  font-shabnamBold text-light-gray text-xl">
                        55
                      </li>
                      <li className="p-1 w-[47px] font-shabnamBold text-light-gray text-xl">
                        33
                      </li>
                    </ul>
                  </div>
                  {/* listed prices rounded ends*/}
                </div>
                <div>
                  <ul className="flex justify-between items-center">
                    <li className="flex items-center">
                      <span className="ml-2">
                        <img src={teacher} alt="" />
                      </span>
                      <span>نام استاد:{item.instructor}</span>
                    </li>
                    <li className="flex items-center">
                      <span className="ml-2 ">
                        <img src={time} alt="" />
                      </span>
                      <span>مدت زمان دوره: {item.duration} ساعت</span>
                    </li>
                    <li>
                      <div className="rtl">
                        {/* <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star /> */}
                        <StarRatings
                          rating={2.5}
                          starDimension="20px"
                          starSpacing="2px"
                          starRatedColor="red"
                        />
                        <span className="font-shabnam mx-2">(458,000)</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-center items-center w-[127px] rounded-full border-green border-2">
                        <span className="text-green font-shabnamBold text-xl">
                          {item.price}
                        </span>
                        <span className="text-green font-vazirmatn">تومان</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* in here we will put the information about the course here it ends */}

              {/* Here we put the photo of the course to introduce it with image start*/}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
