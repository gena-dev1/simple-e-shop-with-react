import React from 'react';

import rightLink from '../../../assets/icons/rightlink.png';


const OrderButton = ({size, handler}) => {

    const modal = () => {
        handler()
    }

    return (
        
            size==='small' 
            ? 
            <button
                onClick={()=>handler(true)}
                className='w-36 h-12 px-4 shadow-2xl text-white rounded-xl flex items-center justify-between fixed right-7 bottom-28 orderButton'>
                <p>Заказать</p>
                <img src={rightLink} />
            </button> 
            :

            <button onClick={()=>handler} className='w-full h-12 text-lg relative orderButton rounded-lg'>
                Заказать
                <img className='absolute right-4 top-3' src={rightLink} />
            </button>
        

    )
}

export default OrderButton
