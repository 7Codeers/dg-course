import React from 'react';
import Swal from 'sweetalert2'

const Success_Card = () => {

    return (
        <div>
            {Swal.fire({
            title: 'سفارش شما با موفقیت ثبت شد',
            text: ' اکنون میتوانید دوره خود را در داشبورد خود مشاهده کنید',
            icon: 'success',
            confirmButtonText: 'رفتن به داشبورد',
            confirmButtonColor: '#36C54E',
            
            })}
        </div>
    );
};

export default Success_Card;