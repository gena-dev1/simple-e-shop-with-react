import React from 'react';
import { ChevronLeftIcon , DotsVerticalIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import { useNavigate } from "react-router-dom";


const Header = ({headerTitle , bgColor, icon }) => {
    const navigate = useNavigate()
    return (
        <>
        <div style={{ backgroundColor: bgColor }} className="h-16 px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
            <ChevronLeftIcon onClick={() => navigate(-1)} className='w-7 rounded-full border text-green-900 border-green-900 ' />
            <p className='font-extrabold text-lg text-green-900'>
                {headerTitle}
            </p>
            {
                icon === 'settings'
                ?
                <DotsVerticalIcon className='w-7' />
                :
                icon === 'shoppingcard'
                ?
                <ShoppingCartIcon onClick={() => navigate('/shoppingcard')} className='w-7 p-1 text-white bg-green-900 rounded-full' />
                :
                null
            }
        </div>
        <div className='h-16'></div>
        </>
    )
}

export default Header
