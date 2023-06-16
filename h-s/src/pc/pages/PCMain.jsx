import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// import { getAllSeyfs, getAllOthers } from '../../api/postFunctions';

import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline';

import keyBig from '../../assets/icon/svg/key-1.svg';
import bannerIMG from  '../../assets/Group650.svg';
import seyf1 from '../../assets/seyfs/seyfformain1.png';
import seyf2 from '../../assets/seyfs/seyfformain2.png';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const PCMain = () => {
    const location = useLocation();

    // const [seyfs, setSeyfs] = useState([]);
    // const [others, setOthers] = useState([]);

    
    // useEffect(() => {
    //     const allProducts = async () => {
    //         const allSeyfs = await getAllSeyfs()
    //         if(allSeyfs) setSeyfs(allSeyfs)
    
    //         const allOthers = await getAllOthers()
    //         if(allOthers) setOthers(allOthers)
    //     }

    //     allProducts()

    // }, []);
    
    // console.log(seyfs);
    // console.log(pathname);
    

    return (
        <div className='w-screen'>
            {/* Header */}
            <Header  />

            {/* Banner */}
            <div className='w-screen h-96 py-9 flex bg-green-50 px-32'>

                <div className='h-full w-2/5 flex flex-col justify-between'>
                    <p className='text-5xl font-extrabold text-green-900'>
                        Давайте найдем ваши сейфы!
                    </p>
                    <div>
                        <p className='text-lg font-bold text-green-900'>
                            Имя сейфа
                        </p>
                        <p className='text-md font-normal text-gray-500'>
                            Имя сейфа
                        </p>
                    </div>
                    <p className='text-3xl font-extrabold text-green-700'>
                        199 TMT
                    </p>

                    <span className='flex items-center'>
                        <Link to='/shoppingcard' className='w-48 h-14 text-white flex justify-between items-center pl-6 pr-3 rounded-3xl bg-linkButton'>
                            <p className='mb-1'>
                                купит сейчас
                            </p>
                            <ShoppingCartIcon className='w-9 bg-green-900 p-2 rounded-full' />
                        </Link>
                        <div className='ml-4'>
                            <HeartIcon className='w-9 text-green-900 bg-gray-200 p-1 rounded-full' />
                        </div>
                    </span>
                </div>

                <div className='w-3/5 '>
                    <img className='w-full' src={bannerIMG} alt="bannerIMG" />
                </div>

            </div>

            {/* Top Recommended Seyf */}
            <div>
                <div className='flex flex-col'>
                    <div className='flex py-10 justify-evenly'>
                        <img src={seyf1} className='w-96' alt="seyf" />
                        
                        <div className='w-96 h-full text-green-900 flex flex-col'>
                            <div className='flex items-end'>
                                <img src={keyBig} className='w-5' alt="key" />
                                <p className='ml-4'>
                                    ВСЕ СЕЙФЫ
                                </p>
                            </div>
                            <p className='font-bold text-3xl'>
                                Имя сейфа
                            </p>
                            <p className='my-7'>
                                Сейф Укрепленный С Наполнителем BGX-27 Обладает Удобным Подсвечивающимся LED Табло.
                            </p>
                            <p className='text-3xl opacity-75 font-extrabold mb-7'>
                                199 TMT
                            </p>
                            <div>
                                <button className='w-32  py-2 rounded-lg bg-green-900 opacity-75  text-white text-center text-sm'>
                                    <Link to='/'>
                                        KУПИТЬ
                                    </Link>
                                </button>
                                <button className='w-32 py-2 ml-4 rounded-lg border border-green-900 text-green-900 text-center text-sm'>
                                    <Link to='/'>
                                        ПОКОЗАТЬ ВСЕ
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex py-10 justify-evenly'>
                        
                        <div className='w-96 h-full text-green-900 flex flex-col'>
                            <p className='flex items-end'>
                                <img src={keyBig} className='w-5' alt="key" />
                                <p className='ml-4'>
                                    ВСЕ СЕЙФЫ
                                </p>
                            </p>
                            <p className='font-bold text-3xl'>
                                Имя сейфа
                            </p>
                            <p className='my-7'>
                                Сейф Укрепленный С Наполнителем BGX-27 Обладает Удобным Подсвечивающимся LED Табло.
                            </p>
                            <p className='text-3xl opacity-75 font-extrabold mb-7'>
                                199 TMT
                            </p>
                            <div>
                                <button className='w-32  py-2 rounded-lg bg-green-900 opacity-75  text-white text-center text-sm'>
                                    <Link to='/'>
                                        KУПИТЬ
                                    </Link>
                                </button>
                                <button className='w-32 py-2 ml-4 rounded-lg border border-green-900 text-green-900 text-center text-sm'>
                                    <Link to='/'>
                                        ПОКОЗАТЬ ВСЕ
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <img src={seyf2} className='w-96' alt="seyf" />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default PCMain
