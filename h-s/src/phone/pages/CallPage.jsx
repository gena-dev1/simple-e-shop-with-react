import React from 'react';

import CallModal from '../components/Call/CallModal';
import MainHeader from '../components/Header/MainHeader';

import Icon from '../assets/icons/myicon.png';

const CallPage = () => {
    const call = {
        title: 'заказ по телефону',
            modalBody: 'Вы можете звонить любое время в любом месте   ',
            buttonTitle: '+99361132339',

    }

    return (
        <div className='h-screen w-full bg-img-light  px-7 flex items-center justify-center' >
            <MainHeader headerTitle='Телефон' />
            <CallModal 
                details={call}
            />
        </div>
    )
}

export default CallPage
