import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline';

import logogreen from '../../../assets/Logo/yasyl.svg'

const Header = ({ id }) => {

    const location = useLocation();

    return (
        <div>
            <div className='w-full h-20 px-40 bg-green-50 flex items-center justify-between'>
                <div>
                    <img src={logogreen} className='w-20' alt="logo" />
                </div>
                <div className='flex text-sm'>
                    <Link to='/' className={`py-2 mx-3 px-4 ${location.pathname ==='/' ? 'rounded-full bg-linkButton text-white' : 'text-green-900'}`} >
                        ГЛАВНАЯ
                    </Link>
                    <Link to='/seyfs' className={`py-2 mx-3 px-4 ${(location.pathname ==='/seyfs' || location.pathname === `/seyfs/${id}` ) ? 'rounded-full bg-linkButton text-white' : 'text-green-900'}`} >
                        СЕЙФИ
                    </Link>
                    <Link to='/others' className={`py-2 mx-3 px-4 ${(location.pathname ==='/others' || location.pathname ===`/others/${id}`) ? 'rounded-full bg-linkButton text-white' : 'text-green-900'}`}>
                        ДРУГИЕ ТОВАРЫ
                    </Link>
                </div>
                <div className='flex'>
                    <Link to='/shoppingcard'>
                        <div className='w-8 h-8 bg-green-900 relative rounded-full text-white'>
                            <span> 
                                <p className='absolute flex items-center justify-center text-xs font-bold border border-white -top-0.5 -right-1 h-4 w-4 bg-red-600 rounded-full'>
                                    0
                                </p>
                                <ShoppingCartIcon className="absolute inset-2"/>
                            </span>
                        </div>
                    </Link>

                    <div className='ml-4'>
                        <HeartIcon className='w-8 h-8 text-green-900 bg-gray-200 p-1 rounded-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
