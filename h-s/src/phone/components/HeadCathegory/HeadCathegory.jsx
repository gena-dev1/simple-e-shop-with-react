import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HeadCathegory = () => {

    const location = useLocation();

    return (
        <>
            <div className='w-full h-16 fixed left-0 right-0 grid grid-cols-2 divide-x divide-green-500 divide-opacity-50 myFontColor shadow-md'>

                <Link
                    to='/seyfs'
                    className='flex items-center justify-center'
                    style={ {borderBottom:` ${ location.pathname==='/seyfs' ? '1px solid green' : 'none'}`}}
                >
                    СЕЙФЫ
                </Link>  
                <Link 
                    to='/others'
                    className='flex items-center justify-center'
                    style={ {borderBottom:` ${ location.pathname==='/others' ? '1px solid green' : 'none'}`}}   
                >
                    ДРУГИЕ
                </Link> 

            </div>
            <div className='h-16'></div>
        </>
    )
}

export default HeadCathegory
