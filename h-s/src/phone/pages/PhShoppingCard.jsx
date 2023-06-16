import React, { useContext } from 'react';

import Header from '../components/Header/MainHeader';
import ListCard from '../components/UI/ListCard/ListCard';


const PhShoppingCard = () => {

    const data = {}

    return (
        <div className='min-h-screen w-full container px-7'>
            <Header headerTitle='Корзина' bgColor='rgba(220,220,220,.5)' icon='settings' />
            <ListCard data={data} />
        </div>
    )
}

export default PhShoppingCard
