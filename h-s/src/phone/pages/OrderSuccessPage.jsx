import React from 'react';

import CallModal from '../components/Call/CallModal';
import Icon from '../assets/icons/myicon.png';


const OrderSuccessPage = () => {
    const myIcon = Icon;
    const modalDetails = {
        call: {
            title: 'заказ по телефону',
            modalBody: 'Вы можете звонить любое время в любом месте   ',
            buttonTitle: '+99361132339',
        },
        orderSuccess: {
            icon: myIcon,
            title: 'заказ успешно размещен',
            modalBody: 'Ваш платеж прошел успешно! Просто подождите, пока Сейф прибудет домой',
            buttonTitle: 'Продолжить покупку',
            forLink: 'Перейти к заказам'
        }
    }

    return (
        <div className='h-screen w-full bg-img-dark  px-7 flex items-center justify-center' >
            <CallModal 
                details={modalDetails.orderSuccess}
            />
        </div>
    )
}

export default OrderSuccessPage
