import React from 'react';
import PCProduct from '../pc/pages/PCProduct';
import PhProduct from '../phone/pages/PhProduct';

const ProductDetail = ({ isDesktop }) => {

    return (
        <div>
            {
                isDesktop
                ?
                <PCProduct />
                :
                <PhProduct />
            }
        </div>
    )
}

export default ProductDetail