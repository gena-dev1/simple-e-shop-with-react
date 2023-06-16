import React from 'react'
import hazynaseyf from '../../assets/icons/hazynaseyf.png';


const MainHeader = ({bgColor}) => {

    return (
        <>
        <div className={`h-16 flex items-center justify-center fixed top-0 left-0 right-0 z-10 ${bgColor}`}>
                <img src={hazynaseyf} />
        </div>
        <div className='h-16'></div>
        
        </>
    )
}

export default MainHeader
