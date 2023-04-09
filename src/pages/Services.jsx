import React from 'react';
// svgs
import boy from '../assets/services_SVG/boy.svg'
import girl from '../assets/services_SVG/girl.svg'
import stain from '../assets/services_SVG/stain.svg'
import counseling from '../assets/services_SVG/counseling.svg'
import evidence from '../assets/services_SVG/evidence.svg'
import job from '../assets/services_SVG/job.svg'
import test from '../assets/services_SVG/test.svg'

const Services = () => {
  return (
    <div className=' w-full h-[100vh]'>
      {/* boy svg */}
      <div data-aos='fade-left' data-aos-delay='400'>
        <img className='w-[250px] h-[400px] absolute top-11 right-0' src={boy} />

        <div className='absolute top-20 right-52 shadow-md w-[230px] h-[100px] bg-transparent rounded-lg flex justify-center items-center flex-col'>
          <h1 className='font-vazirmatnSemiB text-[#5A0BA9]'>خدمات</h1>
          <p className='font-vazirmatnExLight text-[#5A0BA9]'>تمام آنچه نیاز دارید</p>
        </div>
      {/* svg stain */}
        <img className='w-[550px] h-[400px] absolute left-0 top-1' data-aos='fade-right' data-aos-delay='400' src={stain} />
      </div>

    {/* boxs */}

      <div className= 'flex flex-wrap justify-center py-6 gap-8 w-[600px] h-[320px] absolute top-[200px] left-[30%]'
      data-aos='fade-up' data-aos-delay='500'>


        <div className='flex items-center justify-center gap-1  w-[40%] h-[120px] bg-gradient-to-r from-[#E0B408] to-[#F1C40F] rounded-lg'>
          <span className='font-vazirmatnMedium text-white'>مدرک معتبر</span>
          <img className='w-20 h-20' src={evidence}/>
        </div>

        <div className='flex items-center justify-center gap-1  w-[40%] h-[120px] bg-gradient-to-r from-[#CC2817] to-[#E74C3C] rounded-lg'>
          <span className='font-vazirmatnMedium text-white '>امتحان</span>
          <img className='w-16 h-14' src={test} />
        </div>

        <div className='flex items-center justify-center gap-1  w-[40%] h-[120px] bg-gradient-to-r from-[#1A5F8F] to-[#3498DB] rounded-lg'>
          <span className='font-vazirmatnMedium text-white '>فرصت های شغلی</span>
          <img className='w-16 h-14' src={job} />
        </div>
        
        <div className='flex items-center justify-center gap-1  w-[40%] h-[120px] bg-gradient-to-r from-[#641184] to-[#9B59B6] rounded-lg'>
          <span className='font-vazirmatnMedium text-white '>مشاوره</span>
          <img className='w-16 h-14' src={counseling}/>
        </div>
      </div>
      {/* svg girl */}
      <img className='w-[250px] h-[400px] absolute top-[22rem] left-0' data-aos='fade-right' data-aos-delay='600' src={girl} />

    </div>
  );
};

export default Services;