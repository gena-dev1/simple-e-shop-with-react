import React from 'react'
import { Link } from 'react-router-dom';
import logoWhite from '../../../assets/Logo/ak.svg';

import instagram from '../../../assets/instagram.png';
import imo from '../../../assets/imo.png';

const Footer = () => {
    return (
        <div className='w-screen h-80 pt-3 bg-green-900/[.90] text-white relative'>
            {/* <div> */}
                <img className='w-32 h-20 mx-auto mb-5' src={logoWhite} alt="logo" />
            {/* </div> */}
            <div className='w-full px-40 grid grid-cols-4'>
                <div className='flex flex-col px-2'>
                    <p className='text-gray-400 mb-3'>
                        АДРЕСА МАГАЗИНОВ:
                    </p>

                    <p className='text-sm'>
                        Ашхабад, Мир 7, 
                        <br/>
                        Берекетли базар, магазин №24
                    </p>

                    <p className='mt-3 flex '>
                        <p className='mr-3'>
                            Тел:
                        </p>
                        <p>
                            <p>
                                +993 65 50 77 12
                            </p>
                            <p>
                                +993 65 50 77 12
                            </p>
                        </p>
                    </p>
                </div>
                <div className='col-span-2 flex flex-col items-center'>
                    <p className='text-gray-400 mb-3'>
                        Полезные ссылки
                    </p>
                    <Link to='/' className='my-1 text-sm'>
                        Главная
                    </Link>
                    <Link to='/' className='my-1 text-sm'>
                        Сейфи
                    </Link>
                    <Link to='/' className='my-1 text-sm'>
                        Другие Товары
                    </Link>
                    <Link to='/' className='my-1 text-sm'>
                        Контакты
                    </Link>
                </div>
                <div className='pl-5 text-gray-400'>
                    <p className=' mb-3'>
                        Подписывайтесь на нас
                    </p>

                    <p className='flex text-sm my-4'>
                        <img className='w-5 mr-2' src={instagram} alt="instagram" />
                        <span>hazyna_seyf</span>
                    </p>
                    <p className='flex text-sm my-4'>
                        <img className='w-5 mr-2' src={imo} alt="instagram" />
                        <span>hazyna_seyf</span>
                    </p>
                    <p className='flex text-sm my-4'>
                        <span className='text-white mr-2'>Email:</span>
                        <span>info@hazynaseyf.com</span>
                    </p>
                
                    
                </div>
            </div>
            <div className='w-full h-10 bg-footer2 flex items-center justify-center absolute bottom-0'>
                <p className='text-xs'>HazynSeyf © Все права защишены  2021</p>
            </div>
        </div>
    )
}

export default Footer
