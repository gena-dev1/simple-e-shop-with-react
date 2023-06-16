import React, { useEffect } from 'react'

const OrderInput = ({placeholder, name, value1, setValue }) => {


    return (
        <input className='w-1/2 mr-2 px-2 py-1 rounded-lg text-white placeholder-white input-bg-tr focus:outline-none' 
            type='text' 
            name={name}
            value={value1}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder} 
        />
    )
}

export default OrderInput
