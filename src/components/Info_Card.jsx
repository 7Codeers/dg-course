import React,{useState , useEffect} from 'react';
import { validate } from './validate';

const Info_Card = () => {
    const [data , setData] = useState({
        fName:"",
        lName:"",
        email:"",
        number:"",

    });

    const [error , setError] = useState({});
    const [toched , setToched] = useState({
        fName:true,
        lName:true,
        email:true,
        number:true,
    });


    useEffect(() => {
        setError(validate(data))
        console.log(error)
    }, [data , toched])

    const focusHandler = event =>{
        setToched({...toched , [event.target.name] : true })
    }

    const changHandler = event => {

        setData({...data, [event.target.name]: event.target.value})

    }

    return (
        <>
            <div className='w-[1085px] h-[585px] rounded-3xl shadow-xl flex justify-center items-center'>
                 <div className='w-[1038px] h-[550px] bg-[#eeeeee] rounded-3xl p-10'>

                    <h2 className='font-vazirmatnMedium text-xl text-[#707070]'> جزئیات صورت حساب</h2>
                    <div className='flex justify-around'>

                        <div className='flex justify-start flex-col '>
                            <label className='py-3 text-[#707070]'>نام</label>
                            <input 
                            className='w-[450px] h-[50px] rounded-3xl pr-3 focus:outline-[#1a73e8]' 
                            type='text' 
                            name='fName'
                            onChange={changHandler} 
                            onFocus={focusHandler} 
                            placeholder='احسان' />
                            <div className='w-full h-8 p-2'>{error.fName && toched.fName && <span className='px-5 py-2 text-red-500'>{error.fName}</span>}</div>

                        </div>
                        <div className='flex justify-center flex-col pr-3'>
                            <label className='py-3 text-[#707070]'>نام خانوادگی</label>
                            <input 
                            className='w-[450px] h-[50px] rounded-3xl pr-3 focus:outline-[#1a73e8]' 
                            type='text' 
                            name='lName'
                            onChange={changHandler} 
                            onFocus={focusHandler} 
                            placeholder='مولایی' />
                            <div className='w-full h-8 p-2'>{error.lName && toched.lName && <span className='px-5 py-2 text-red-500 '>{error.lName}</span>} </div>
                        </div>

                    </div>

                    <div className='flex justify-start flex-col p-1'>

                        <label className='py-4 text-[#707070]'>شماره همراه</label>

                        <input 
                        className=' w-full h-[50px] rounded-3xl pr-3 focus:outline-[#1a73e8]' 
                        onChange={changHandler} 
                        onFocus={focusHandler} 
                        placeholder='09101054912' 
                        name='number'
                        maxLength={11} 
                        type="text" />
                        <div className='w-full h-8 p-2'>{error.number && toched.number && <span className='px-5 py-2 text-red-500'>{error.number}</span>}</div>

                        <label className='py-4 text-[#707070]'>آدرس ایمیل</label>

                        <input 
                        className='w-full h-[50px] rounded-3xl pr-3 focus:outline-[#1a73e8]' 
                        name='email' 
                        onChange={changHandler} 
                        placeholder='cheloi-darabi@gmail.com' 
                        type="email" />
                        <div className='w-full h-8 p-2'>{error.email && toched.email && <span className='px-5 py-2 text-red-500'>{error.email}</span>}</div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Info_Card;