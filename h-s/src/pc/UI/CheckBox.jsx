import React from 'react'

const CheckBox = ({ title }) => {
    return (
        <p className='flex items-center'>
            <input type="checkbox" className="mr-2 checked:bg-blue-500" />
            <p>
                {title}
            </p>
        </p>
    )
}

export default CheckBox
