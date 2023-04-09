import React from 'react';
import group66 from "../assets/images/Group 66.png";
const Capacity = () => {
  return (
    <div className='container mx-auto flex justify-center mt-32 '>
        <ul className='shadow-3xl w-[464px] rounded-2xl'>
          <li className='flex justify-between items-center px-6 py-4'>
            <span className='font-vazirmatnBold text-2xl'>ظرفیت</span>
            <span><img src={group66} alt="" /></span>
          </li>
          <li className='flex justify-between items-center bg-lightgrey px-6 py-4'>
            <span className='font-vazirmatnExLight text-xl'>ظرفیت کل دوره</span>
            <span className='font-shabnamBold text-2xl text-grey'>50</span>
          </li>
          <li className='flex justify-between items-center px-6 py-4'>
            <span className='font-vazirmatnExLight text-xl '>تعداد دانشجوی دوره</span>
            <span className='font-shabnamBold text-2xl text-grey'>34</span>
          </li>
        </ul>
    </div>
  );
};

export default Capacity;