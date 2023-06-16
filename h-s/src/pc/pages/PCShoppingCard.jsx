import React from 'react';
import { ArrowNarrowLeftIcon, TrashIcon, XCircleIcon } from '@heroicons/react/outline';
import productCard1 from '../../assets/productCard1.png';
import Header from '../components/Header/Header';

const PCShoppingCard = () => {


    return (
        <>
        {/* <Header /> */}
        
        <div className='w-full min-h-44 px-32'>

            <p className='w-full text-center leading-loose my-4 text-4xl font-bold '>
                Корзина
            </p>

            <div className='w-full h-full'>
                <table className="min-w-full">
                    <thead className='border-b border-b-gray-700'>
                        <tr className='min-w-full text-sm'>
                            <th scope="col" className='w-5/12 py-3 text-left'>
                                Продукт
                            </th>
                            <th className='w-32 py-3'>
                                Цена
                            </th>
                            <th className='py-3'>
                                Количество
                            </th>
                            <th className='w-32 py-3'>
                                Сумма
                            </th>
                            <th className='w-2/12 py-3'>
                                {/* <TrashIcon className='w-4 text-red-700' /> */}
                            </th>
                        </tr>
                    </thead>

                    

                    <tbody>
                        <tr className='h-24'>
                            <td className='my-4 flex items-center'>
                                <div className='w-24 h-20 mr-4 flex items-center justify-center bg-green-100'>
                                    <img className='w-16 h-12 shadow-xl' src={productCard1} alt="" />
                                </div>
                                <p>
                                    <p className='text-xs text-gray-700'>мебельный</p>
                                    
                                    <p className='text-sm font-semibold'>Сейф BGX-AD-T27</p>
                                    
                                </p>
                            </td>
                            <td className='text-center text-sm font-bold'>
                                199 TMT
                            </td>
                            <td>
                                <div className='w-20 h-6 mx-auto px-2 bg-green-100 text-sm font-bold rounded-md flex justify-between items-center'>
                                    <span className='cursor-pointer'>
                                        -
                                    </span>
                                    <span className='bg-white h-5 w-5 flex items-center justify-center'>
                                        2
                                    </span>
                                    <span className='cursor-pointer'>
                                        +
                                    </span>
                                </div>
                            </td>
                            <td className='text-center text-sm font-bold'>
                                199 TMT
                            </td>
                            <td>
                                <XCircleIcon className='w-5 text-red-600 ml-auto' />
                            </td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className='h-24'>
                            <td className='my-4 flex items-center'>
                                <div className='w-24 h-20 mr-4 flex items-center justify-center bg-green-100'>
                                    <img className='w-16 h-12 shadow-xl' src={productCard1} alt="" />
                                </div>
                                <p>
                                    <p className='text-xs text-gray-700'>мебельный</p>
                                        
                                    <p className='text-sm font-semibold'>Сейф BGX-AD-T27</p>   
                                </p>
                            </td>
                            <td className='text-center text-sm font-bold'>
                                199 TMT
                            </td>
                            <td>
                                <div className='w-20 h-6 mx-auto px-2 bg-green-100 text-sm font-bold rounded-md flex justify-between items-center'>
                                    <span>
                                        -
                                    </span>
                                    <span className='bg-white h-5 w-5 flex items-center justify-center'>
                                        2
                                    </span>
                                    <span>
                                        +
                                    </span>
                                </div>
                            </td>
                            <td className='text-center text-sm font-bold'>
                                199 TMT
                            </td>
                            <td>
                                <XCircleIcon className='w-5 text-red-600 ml-auto' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='h-20 pt-3 font-semibold text-sm text-green-700 flex justify-between'>
                <div>
                    <ArrowNarrowLeftIcon className='w-5 mr-2 text-red-500 float-left' />
                    Продолжить покупки
                </div>
                <div>
                    <TrashIcon className='w-5 mr-2 text-red-500 float-left' />
                    Очистить корзину
                </div>
            </div>

            <div className='w-full h-64 flex'>
                <div className='w-1/2'>
                    <input
                        className='w-11/12 text-sm p-2 mb-4 rounded-lg border border-gray-100 focus:outline-none focus:border-sky-500'
                        type='text'
                        placeholder='Телефон *'
                        required
                    />
                    <input
                        className='w-11/12 text-sm p-2 mb-4 rounded-lg border border-gray-100 focus:outline-none focus:border-sky-500'
                        type='text'
                        placeholder='Имя *'
                        required
                    />
                </div>
                <div className='w-1/2 h-52 p-5 flex flex-col items-center justify-between bg-green-50 rounded-xl text-green-900 font-semibold'>
                    <ul className='w-full'>
                        <li className='mb-2 text-sm flex justify-between'>
                            <p>
                                Сумма:
                            </p>
                            <p>
                                199 TMT
                            </p>
                            
                        </li>
                        <li className='mb-2 text-sm flex justify-between'>
                            <p>
                                Доставка:
                            </p>
                            <p>
                                199 TMT
                            </p>
                            
                        </li>
                        <hr/>
                        <li className='my-3  flex justify-between'>
                            <p>
                                Итого:
                            </p>
                            <p>
                                199 TMT
                            </p>
                            
                        </li>
                    </ul>

                    <button className='w-2/4 py-2 text-white rounded-full bg-green-900/50 '>
                        Заказать
                    </button>
                </div>
            </div>

            
        </div>
        </>
    )
}

export default PCShoppingCard
