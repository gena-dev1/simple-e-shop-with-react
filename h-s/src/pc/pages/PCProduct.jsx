import React, { useState } from 'react';

import sey0 from '../../assets/seyfs/new-8.png';
import sey1 from '../../assets/seyfs/new-9.png';
import sey2 from '../../assets/seyfs/new-10.png';
import sey3 from '../../assets/seyfs/new-11.png';

// import det1 from '../../assets/icon/svg/Group 642.svg';
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';



const PCProduct = () => {

    const location = useLocation();
    const [pID] = useState(location.state.id);

    return (
        <>
        <Header id={pID} />
        <div className='flex w-full'>
            <div className='w-1/2 bg-white pt-7 pb-14'>
                {/* <div className='w-full h-full'> */}

                    <div className='w-full flex justify-center'>
                        <img className='w-48' src={sey0} alt="seyf" />
                    </div>

                    <div className='w-full h-20 flex justify-center'>
                            <img className='w-28 h-32' src={sey1} alt="seyf" />
                            <img className='w-28 h-32' src={sey2} alt="seyf" />
                            <img className='w-28 h-32' src={sey3} alt="seyf" />
                    </div>
                    <div className='bg-green-50 w-full h-28 px-28 flex justify-between items-center'>
                        <div className='flex flex-col items-center text-green-900'>
                            {/* <img className='w-12' src={det1} alt="" /> */}
                            <p className='text-sm -mb-1 font-semibold'>
                                Замок
                            </p>
                            <p className='text-sm font-extrabold'>65</p>
                            
                        </div>
                        <div className='flex flex-col items-center text-green-900'>
                            {/* <img className='w-12' src={det1} alt="" /> */}
                            <p className='text-sm -mb-1 font-semibold'>
                                Замок
                            </p>
                            <p className='text-sm font-extrabold'>65</p>
                            
                        </div>
                        <div className='flex flex-col items-center text-green-900'>
                            {/* <img className='w-12' src={det1} alt="" /> */}
                            <p className='text-sm -mb-1 font-semibold'>
                                Замок
                            </p>
                            <p className='text-sm font-extrabold'>65</p>
                            
                        </div>
                        <div className='flex flex-col items-center text-green-900'>
                            {/* <img className='w-12' src={det1} alt="" /> */}
                            <p className='text-sm -mb-1 font-semibold'>
                                Замок
                            </p>
                            <p className='text-sm font-extrabold'>65</p>
                            
                        </div>
                        <div className='flex flex-col items-center text-green-900'>
                            {/* <img className='w-12' src={det1} alt="" /> */}
                            <p className='text-sm -mb-1 font-semibold'>
                                Замок
                            </p>
                            <p className='text-sm font-extrabold'>65</p>
                            
                        </div>
                    </div>
                    
                {/* </div> */}
            </div>
            
            <div className='w-1/2 bg-green-50 pt-5 pb-14 pl-20 pr-28 flex flex-col'>
                    <div className='w-full h-20 pl-20 flex flex-none flex-col'>
                        <p className='text-green-900 font-bold text-4xl'>BGX-AD-T27</p>
                        <p className='text-green-600 font-bold text-2xl'>199 TMT</p>
                    </div>
                    <div className='w-11/12 h-24 px-3 text-gray-600 flex flex-col flex-grow overflow-y-scroll'>
                        <p className='my-1 font-bold text-md'>
                            Описание
                        </p>
                        <div className='text-sm'>
                            Сейф Мебельный BGX-AD-T27 С Цифровым 
                            LED Табло, Подсветкой И Съемной Полкой.
                            На Сейф Установлена 2-Х Ригельная 
                            Система Запирания.
                            Оборудован Внутренними Петлями, Что Дает 
                            Эффективную Защиту От Взлома.
                            Дверь Открывается На 100°, Что Позволяет 
                            Открытой Двери Не Перекрывать Дверной 
                            Проем.
                            Оборудован Снимаемой Полкой.
                            Сейф Оборудован Электронным Кодовым 
                            Замком С Возможностью Отпирания 
                            Ключем Аварийного Вскрытия В Случае 
                            Утери Кода Либо При Разряде Элементов 
                            Питания Замка.
                            Код Сменный (От 3 До 8 Цифр) И Состоит Из 
                            Комбинаций Чисел От «0» До «9». Питание 
                            Замка Осуществляется От 4-Х Батареек Типа 
                            «AA» (1. 5V).
                            Замок Блокируется, Если 3 Раза Ввести 
                            Неправильный Код, Что Защищает Его От 
                            Вскрытия Злоумышленниками Путем 
                            Подбора.
                            Имеет Внешний Модуль Для 4 Батарей, 
                            Предназначенный Для Отпирания Замка В 
                            Случае Потери Заряда Внутренними 
                            Элементами Питания.
                            Комплектация : 4 Батарейки, 2 Аварийных 
                            Ключа, 2 Ключа Для Отпирания, 1 Внешний 
                            Подключаемый Блок Для Батарей, 
                            Инструкция По Эксплуатации.
                            Предусмотрена Возможность Монтажа 
                            Сейфа К Стене (2 Отверстия).
                        </div>
                    </div>
                    <div className='w-full h-28 flex flex-none items-center justify-between'>
                            <Link to='/shoppingcard' className='w-2/3 h-14 text-white flex justify-between items-center pl-6 pr-3 rounded-3xl bg-linkButton'>
                                <p className='mb-1'>
                                    купит сейчас
                                </p>
                                <ShoppingCartIcon className='w-9 bg-green-900 p-2 rounded-full' />
                            </Link>
                            <div className='ml-4'>
                                <HeartIcon className='w-9 text-green-900 bg-gray-200 p-1 rounded-full' />
                            </div>
                    </div>
            </div>

        </div>
        </>
    )
}

export default PCProduct
