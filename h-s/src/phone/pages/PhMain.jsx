import React from 'react';

import MainHeader from '../components/Header/MainHeader'
import SearchInput from '../components/SearchInput'
import Title from '../components/Title/Title'
import ListBigCard from '../components/UI/BigCard/ListBigCard'
import FooterButtons from '../components/UI/FooterButtons/FooterButtons';

const PhMain = ({ productlist }) => {


    const titleMainPage = "Давайте найдем ваши сейфы!";
    // let cathegories = productlist2.cathegories;
    console.log(productlist);
    

    return (
        <div className="">
            <MainHeader bgColor={'bg-green-100'} />
            <div className="container px-7">
                <Title title={titleMainPage} />
                <SearchInput />
                <ListBigCard productlist={productlist} />
            </div>
            <FooterButtons isActive='home' />
        </div>
    )
}

export default PhMain
