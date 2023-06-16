import React from 'react'

import { DotsVerticalIcon } from '@heroicons/react/solid';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ counter, pro, incdecFunction }) => {
    const location = useLocation();

    const myincdec = (operation) => {
        incdecFunction(operation)
    }


    return (
        <>
                <li className='w-full h-28 my-4 px-3 py-2 flex items-center rounded-xl bg-gray-200 grid grid-cols-3'>
                    <div className='col-span-1 p-2 '>
                        <img className='' src={`${process.env.PUBLIC_URL}/${pro.images.img1}`} />
                    </div>
                    
                    <div className='col-span-2 flex-col'>
                        <div className='flex justify-between'>
                            <Link 
                                to={`${location.pathname}/${pro.id}`} 
                                state={pro}
                                className='text-green-900 font-bold' 
                            >
                                {pro.name}
                            </Link>
                            <DotsVerticalIcon className='w-6 text-green-900' />
                        </div>
                        <p className='text-gray-500 text-sm'>
                            {pro.briefInfo}
                        </p>
                        <p className='flex justify-between'>
                            {
                                counter===null 
                                ? <p></p> 
                                :
                                <div className='flex' >
                                    <button
                                        style={{ borderColor: '1px solid red' }}
                                        onClick={() => myincdec('-')}
                                        className='w-6 b h-full rounded-md border-green-900'
                                    >
                                        <span className='px-2' style={{border:'2px solid darkgreen', borderRadius: '5px'}}>-</span>
                                    </button>
                                    <span className='mx-3'>{counter}</span>
                                    <button
                                        style={{ borderColor: '1px solid red' }}
                                        onClick={() => myincdec('+')}
                                        className='w-6 b h-full rounded-md border-green-900'
                                    >
                                        <span className='px-2' style={{border:'2px solid darkgreen', borderRadius: '5px'}}>-</span>
                                    </button>

                                </div>
                            }
                            <p style={{ color: 'rgb(101,168,31)' }} className='font-bold text-sm self-end'>
                                {pro.cost} TMT
                            </p>
                        </p>

                    </div>

                </li>

        </>
    )
}

export default Card
