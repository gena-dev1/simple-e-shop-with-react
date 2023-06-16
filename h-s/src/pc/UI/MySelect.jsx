import React from 'react'

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            className='border float-right border-gray-300 px-4 py-2 rounded-lg'
            value={value}
            onChange={ e => onChange(e.target.value) }
        >
            <option disabled value="">{ defaultValue }</option>
            {
                options.map(option => 
                    <option key={option.value} value={option.value} >
                        {option.name}
                    </option>    
                )
            }

        </select>
    )
}

export default MySelect
