import React, { useState, useEffect } from 'react';

import Card from '../UI/ListCard/Card';

import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/outline';
import { useLocation } from 'react-router-dom';

const CathegoryList = ({ data, cathegories }) => {
    const location = useLocation();
    const [isShowHide, setIsShowHide] = useState('');
    const [prevStatus, setPrevStatus] = useState('');    

    const showHide = (title) => {
        setIsShowHide(title);
        setPrevStatus(isShowHide);
    }

    useEffect(() => {
        if (isShowHide === prevStatus) {
            setIsShowHide('');
        }
    }, [isShowHide, prevStatus]);

    return (
            
        cathegories.map( d => 
            <div key={d.cathName} className='mb-1 flex-col'>
                <ul onClick={() => showHide(d.cathName)} className='grid grid-cols-6 gap-1 py-4 myFontColor text-xl'>
                    <li className='col-span-1'>
                        <img src={`${process.env.PUBLIC_URL}/${d.icon}`} alt="" />
                    </li>
                    <li className='col-span-4 pl-2'>
                        {d.cathName}
                    </li>
                    <li className='col-span-1 flex justify-end'>
                        {
                            isShowHide === d.cathName
                            ?
                            <ChevronLeftIcon className='w-7 h-7 border border-green-900 rounded-full' />
                            :
                            <ChevronDownIcon className='w-7 h-7 border border-green-900 rounded-full' />
                        }
                    </li>
                </ul>

               
                {
                    isShowHide === d.cathName
                    ?
                    <div className='h-auto w-full'>
                        {  
                            data.filter(product => product.cathegory === d.cathName ).map(filteredProduct =>
                                    <Card
                                    key={filteredProduct.id}
                                    counter={null}
                                    pro={filteredProduct}
                                    incdecFunction={null}
                                    />
                                )
                        }
                    </div>
                    :
                    null
                }
                    {
                        isShowHide === 'Все' && isShowHide === d.cathName
                        ?
                        <div className='h-auto w-full'>
                            {  
                                data.map(product =>
                                    <Card
                                        key={product.id}
                                        counter={null}
                                        pro={product}
                                        incdecFunction={null}
                                    />
                                    )
                                }
                        </div>
                        :
                        null
                    }


            </div>
        )   

    )
}

export default CathegoryList
