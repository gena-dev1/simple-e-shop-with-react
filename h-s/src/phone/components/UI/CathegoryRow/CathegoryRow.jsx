import React, { useState } from 'react'

const CathegoryRow = ({ cathegory, getCath }) => {

    const [inActive, setInActive] = useState('Рекемендачии');

    const getCathegoryName = (cathName) => {
        getCath(cathName);
        setInActive(cathName);
    }

    return (
            <ul className='w-full mb-2 flex overflow-x-scroll scroll-smooth example'>   
                {
                    cathegory.map((cath, index)=> 
                        <li 
                            key={index} 
                            onClick={()=>getCathegoryName(cath)}
                            className='min-w-max h-8 my-2 px-3 mx-1 flex items-center'
                            style={ cath===inActive 
                                ? 
                                {borderRadius: '20px', backgroundColor: 'rgb(232,242,236)', color: 'rgb(11,63,32)', fontWeight: 'bold'}
                                : 
                                {border: 'none'}
                            }
                        >
                            {cath}
                        </li>
                    )
                }
            </ul>
    )
}

export default CathegoryRow
