import React from 'react';
import PCShoppingCard from '../pc/pages/PCShoppingCard';
import PhShoppingCard from '../phone/pages/PhShoppingCard';

const ProductDetail = ({ isDesktop }) => {

    return (
        <div>
            {
                isDesktop
                ?
                <PCShoppingCard />
                :
                <PhShoppingCard />
            }
        </div>
    )
}

export default ProductDetail