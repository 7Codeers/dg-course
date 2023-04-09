import React from 'react';
import Tick from '../assets/services_SVG/tick.svg'

const Course_benefit = () => {
    return (
        <div className='w-[440px] h-[220px] shadow-md border flex text-right flex-col justify-between overflow-hidden
          rounded-2xl '>
            <h2 className='pr-7 pt-4 text-2xl font-vazirmatn font-bold text-[#474747]'>مزایای شرکت در این دوره</h2>
            <ul className='even:border-green-500 text-[#707070]'>
                <li className='pr-6 border w-full py-3 flex justify-start'><img className='pl-3' src={Tick} />ارتباط مستقیم با مدرس</li>
                <li className='pr-6 border w-full py-3 flex justify-start'><img className='pl-3' src={Tick} />ساخت رزومه مناسب برای بازار کار </li>
                <li className='pr-6 border w-full py-3 flex justify-start'><img className='pl-3' src={Tick} /> معرفی به بهترین شرکت ها</li>
            </ul>
        </div>
    );
};

export default Course_benefit;