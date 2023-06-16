import React from 'react'
import PCMain from '../pc/pages/PCMain'
import PhMain from '../phone/pages/PhMain'

const MainPage = ({ isDesktop, products }) => {

    return (
        <div>
            {
                isDesktop
                ?
                <PCMain productlist={products} />
                :
                <PhMain productlist={products} />
            }
        </div>
    )
}

export default MainPage
