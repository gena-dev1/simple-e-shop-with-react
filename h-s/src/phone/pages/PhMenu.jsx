import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import HeadCathegory from '../components/HeadCathegory/HeadCathegory';
import CathegoryList from '../components/CathegoryList/CathegoryList';
import FooterButtons from '../components/UI/FooterButtons/FooterButtons';



const PhMenu = ({ productList, cathegories }) => {

    return (
        <div className='container px-7'>
            <Header headerTitle='Меню' icon='settings' bgColor='rgba(220,220,220,0.6)' />

            <HeadCathegory />
            
            <div className='mt-8'>
                <CathegoryList data={productList} cathegories={cathegories} />
            </div>

            <FooterButtons isActive='menu' />
        </div>
    )
}

export default PhMenu
