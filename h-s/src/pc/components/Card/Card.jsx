import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/outline';

const Card = ({product}) => {
    const location = useLocation();


    return (
        <div className='w-52 h-80 py-4 bg-gray-100 rounded-xl flex flex-col items-center'>
            <div className='w-full h-1/2 py-2 flex justify-center'>
                <img className='w-32 h-24 shadow-2xl' src={`${process.env.PUBLIC_URL}/${product.images.img1}`} alt="product" />
            </div>
            <p className='font-bold my-1'>
                <Link 
                    to={`${location.pathname}/${product.id}`} 
                    state={product}
                    className='text-green-900 font-bold' 
                >
                    {product.nameID}
                </Link>
            </p>
            <p className='text-xs'>
                {product.cathegory}
            </p>
            <p className='font-extrabold my-2 text-green-900/75'>
                {product.cost} TMT
            </p>
            
            <ShoppingCartIcon 
                // onClick={}
                className='w-20 h-8 p-2 mt-2 rounded-lg shadow-lg text-center text-white bg-green-900/75' 
            />
        </div>
    )
}

export default Card
