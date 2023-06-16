import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import FullRoundedButton from '../UI/Buttons/FullRoundedButton';

const CallModal = ({ details }) => {
    const [visible, setVisible] = useState('hidden');

    useEffect(() => {
        if (details.icon && details.forLink) {
            setVisible('block mt-10 mb-6');
            return
        } else {
            return null
        }
    }, [])

    return (
        <div className='w-full h-auto px-8 bg-white flex flex-col text-center items-center rounded-2xl' >
            <img className={visible} src={details.icon} />
            <h1 style={{ color: 'rgb(11,63,32)' }} className='mb-6 mt-4 font-extrabold text-3xl'>
                {details.title}
            </h1>
            <p style={{ color: 'rgb(134,162,148)' }} className='mb-6 font-bold'>
                {details.modalBody}
            </p>
            <FullRoundedButton buttonTitle={details.buttonTitle} />
            <Link to="/sebet" className='mb-6 font-bold text-gray-300' >{ details.forLink }</Link>
        </div>
    )
}

export default CallModal
