import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllOthers, getAllSeyfs } from '../../api/postFunctions';

import { SearchIcon } from '@heroicons/react/outline';
import filtr from '../../assets/filtr.svg';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import CheckBox from '../UI/CheckBox';
import Card from '../components/Card/Card';
import MySelect from '../UI/MySelect';


const PCMenu = ({ productList,  cathegories }) => {
    
    const location = useLocation();
    const path = location.pathname;

    const [shoppingCard, setShoppingCard] = useState([]);
    

    const [selectedSort, setSelectedSort] = useState('');
    const [displayCathegory, setDisplayCathegory] = useState(cathegories[0].cathName);
    const [filteredProductList, setFilteredProductList] = useState([]);

    const pr =  productList.filter( prod =>  displayCathegory === prod.cathegory || displayCathegory === "Все" );

    useEffect(() => {
        setFilteredProductList(pr)
    }, [displayCathegory]);

    useEffect(() => {
        setDisplayCathegory(cathegories[0].cathName)
        setFilteredProductList(pr);
    }, [path])


    const sortProducts = (sort) => {
        setSelectedSort(sort);
    }



    return (
        <>
            <Header />
            <div className='w-screen h-full px-32 flex text-green-900 '>
                <div className='w-full pt-14 flex'>

                    <div className='w-3/12 p-3'>
                        <button className='h-8 px-2 flex items-center justify-start border border-gray-300 rounded-lg'>
                            <img className='h-4 mr-2' src={filtr} alt="filtr" />
                            Филтрь
                        </button>

                        {/* Cathegory */}
                        <div className='w-full mt-4 text-sm'>
                            {
                                cathegories.map( cathegory => (
                                    <p 
                                        key={cathegory.cathName}
                                        onClick={() => setDisplayCathegory(cathegory.cathName)}
                                        className={`w-max px-2 py-1 cursor-pointer   ${displayCathegory === cathegory.cathName ? 'border-b border-b-red-500' : ''}`}
                                    >
                                        {cathegory.cathName}
                                    </p>
                                ))
                            }
                        </div>

                        {/* Lock */}
                        <div className='w-full mt-4 text-sm'>
                            <p className='py-1 text-lg font-semibold'>
                                Замок
                            </p>
                            <CheckBox title='Код' />
                            <CheckBox title='Ключ' />
                            <CheckBox title='Электронный' />
                            <CheckBox title='Сканер Отпечатка' />
                        </div>

                        {/* ----------Price----------- */}
                        <div className='w-full mt-4 text-sm'>
                            <p className='py-1 text-lg font-semibold'>
                                Цена
                            </p>

                            <div className='my-2 flex'>
                                <input 
                                    type='number' 
                                    placeholder='Мин'
                                    className='w-16 h-6 text-sm text-center border border-gray-200 focus:outline-none'
                                />
                                <span className='mx-2 font-bold'>
                                    -
                                </span>
                                <input 
                                    type='number' 
                                    placeholder='Макс'
                                    className='w-16 h-6 text-sm text-center border border-gray-200 focus:outline-none'
                                />

                                <SearchIcon className='w-7 h-6 bg-green-800 text-white p-1 ml-3' />
                            </div>

                            <CheckBox title='ТМТ 0.00 - 25.00' />
                            <CheckBox title='ТМТ 25.00 - 50.00' />
                            <CheckBox title='ТМТ 50.00 - 75.00' />
                            <CheckBox title='ТМТ 75.00 - 100.00' />
                        </div>
                    </div>

                    <div className='w-9/12 p-3'>

                        <MySelect
                            value={selectedSort}
                            onChange={sortProducts}
                            defaultValue='Сортировка'
                            options={[
                                {value: 'gymmatdan', name: 'gymmatdan arzana'},
                                {value: 'arzandan', name: 'arzandan gymmada'},
                            ]}
                        />


                        <div className='w-full py-6 grid justify-items-end gap-10 grid-cols-3'>
                            {
                                filteredProductList.map((product) => 
                                    <Card 
                                        key={product.id} 
                                        product={product}
                                    />
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default PCMenu
