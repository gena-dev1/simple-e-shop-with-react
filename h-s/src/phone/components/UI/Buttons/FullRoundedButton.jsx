import React from 'react'

const FullRoundedButton = ({ buttonTitle }) => {
    return (
        // <div className={className}>
            <button style={{ backgroundColor: 'rgb(66,109,83)' }} className='w-4/5 h-10 mb-6 text-white rounded-full flex items-center justify-center'>
                { buttonTitle }
            </button>
        // </div>
    )
}

export default FullRoundedButton
