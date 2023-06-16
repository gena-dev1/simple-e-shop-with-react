import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import OrderButton from '../Buttons/OrderButton';

import settings2 from '../../../assets/icons/settings2.png';
import Card from './Card';
import OrderInput from '../inputs/OrderInput';


const ListCard = ({ data }) => {

    const [counter, setCounter] = useState(1);
    const [state, setState] = useState(data.seyf);
    const [isModalActive, setIsModalActive] = useState(false);

    const [tel, setTel] = useState('');
    const [named, setNamed] = useState('');

    var summ0=0;
    var dostavka = 198;
    const [summ, setSumm] = useState(0);
    const [totalSumm, setTotalSumm] = useState(0);

    const incdec = (operation) => {
        if (operation === '-') {
            counter > 1 ? setCounter(counter-1) : setCounter(counter)
        } else if(operation === '+') {
            counter < 10 ? setCounter(counter+1) : setCounter(counter)
        }
    }


    useEffect(() => {
        state.map(product => {
            product.products.map(pro => {
                summ0 = summ0 + pro.productCost;
                setSumm(summ0);
            })
        });
        setTotalSumm(summ+dostavka);

    }, )

    return (
        <>
            <ul className='h-full pb-36 mt-6 flex-col overflow-y-scroll'>
                {
                    state.map(product => 
                        product.products.map((pro, index) =>
                                <Card 
                                    key={index}
                                    counter={counter}
                                    pro={pro}
                                    incdecFunction={incdec}
                                />
                                
                            )
                    )
                }
            </ul>
            
            <OrderButton 
                handler={setIsModalActive}
                size='small' 
            />

            {/* PopUp Modal */}
            {
                isModalActive ?
            <div 
                style={{ backgroundColor: 'rgb(98,139,114)' }} 
                className='w-full h-2/5 flex flex-col text-white container px-7 py-4 rounded-t-3xl fixed bottom-0 left-0 rigth-0'
            >
                <p className='my-2 flex justify-between'>
                    <span>Сумма:</span>
                    <span>{summ} TMT</span>
                </p>
                <p className='mb-4 flex justify-between'>
                    <span>Стоимость доставки:</span>
                    <span>{dostavka} TMT</span>
                </p>
                <hr />
                <p className='my-2 font-medium text-xl flex justify-between'>
                    <span>Итого:</span>
                    <span>{totalSumm} TMT</span>
                </p>

                <div className='w-full mb-3 flex justify-between'>
                    <OrderInput 
                        placeholder='Тел' 
                        name='tel' 
                        value1={tel}
                        setValue={setTel}
                    />
                    <OrderInput 
                        placeholder='Имя' 
                        name='name' 
                        value1={named} 
                        setValue={setNamed}
                    />
                    
                </div>

                <Link to='/ordersuccess'>
                    <OrderButton size='full' />
                </Link>

            </div>
            :
            null
            }


        </>
    )
}

export default ListCard
