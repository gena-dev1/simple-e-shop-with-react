import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CathegoryRow from '../CathegoryRow/CathegoryRow';


import BigCard from './BigCard';

const ListBigCard = ({ productlist }) => {
    const [getCathRow, setGetCathRow] = useState('Рекемендачии');

    const cathName = (cath) => {
        setGetCathRow(cath);
    }

      // get unique category items
      const uniqueItems = (x, i, a) => a.indexOf(x) === i;
      const TOP_CATEGORIES = productlist.map(prod => prod.topCathegories).filter(
          uniqueItems
      );

    return (
        <>
            <CathegoryRow 
                getCath={cathName}  
                cathegory={TOP_CATEGORIES}
            />
            <ul role='list' className='flex flex-wrap justify-between'>
                {
                    productlist.map( product =>
                        getCathRow === product.topCathegories 
                        ?
                        <Link  to={`/products/${product.id}`} state={ product } >
                            <li className='w-full h-full'>
                                <BigCard 
                                    key={product.id}
                                    name={product.name}
                                    cathegory = {product.topCathegories}   
                                    cost={product.cost}
                                    image={product.images}
                                />
                            </li>
                        </Link>
                        :
                        null
                    )
                }
            </ul>
        </>
    )
}

export default ListBigCard
