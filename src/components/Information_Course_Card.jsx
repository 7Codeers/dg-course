import React from 'react';

// svg
import book from '../assets/information_SVG/book.svg'
import item from '../assets/information_SVG/item.svg'
import endCourse from '../assets/information_SVG/endCourse.svg'
import startCourse from '../assets/information_SVG/startCourse.svg'


const Information_Course_Card = () => {
    return (
        <div className='w-full h-[400px] flex justify-center pt-12'>
            
            <div className=' w-[464px] h-[269px] rounded-xl border-2 shadow-lg'>
                <h2 className='font-vazirmatnBold px-6 p-4 text-lg'>مشخصات دوره</h2>
                <div className='bg-gray-100 text-zinc-600 w-full h-12 border-t-2 flex justify-around items-center'>
                    <img src={book} alt="" />
                    <span className='ml-36'>نام دوره</span>
                    <p>Angular</p>
                </div>
                <div className='w-full h-12 text-zinc-600 border-t-2 flex justify-around items-center'>
                    <img src={item} alt="" />
                    <span className='ml-40'>ترم ارائه شده </span>
                    <p className='font-bold'>3</p>
                </div>
                <div className='bg-gray-100 text-zinc-600 w-full h-12 border-t-2 flex justify-around items-center'>
                    <img src={startCourse} alt="" />
                    <span className='ml-32'> شروع ترم</span>
                    <p className='font-bold'>1401/3/13</p>
                </div>
                <div className='w-full text-zinc-600 h-12 border-t-2 flex justify-around items-center'>
                    <img src={endCourse} alt="" />
                    <span className='ml-32'>پایان ترم </span>
                    <p className='font-bold'>1402/9/13</p>
                </div>
                
                

            </div>
            
        </div>
    );
};

export default Information_Course_Card;