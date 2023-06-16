import React from 'react'

const BigCard = ({name, cathegory, cost, image}) => {

    return (
        <div 
            style={{ width: "150px", height: '200px' }} 
            className='mb-4 rounded-2xl bg-bigcard-bottom border-gray-300'
        >
            <div className="h-4/6 rounded-t-2xl bg-bigcard-top relative">
                <img className='w-20 absolute top-3 left-3 my-shadows' 
                    src={`${process.env.PUBLIC_URL}/${image.img1}`}
                />
            </div>
            <div className='h-2/6 w-full px-2 flex items-center'>
                <div className='h-full w-2/3 pt-3'>
                    <span>
                        <p className='text-xs' style={{color: 'rgb(68,107,84'}}>{cathegory}</p>
                        <h5 className='font-bold text-sm' style={{color: 'rgb(11,63,32'}}>{name}</h5>
                    </span>
                </div>

                <span className='h-full flex items-center justify-end'>
                    <button 
                        style={{ fontSize: '0.7rem' }}
                        className='h-max w-max mt-2 p-1 bg-white text-green-600 rounded-full border-gray-300'>
                        {cost} TMT
                    </button>
                </span>
            
            </div>
            <div>

            </div>
        </div>
    )
}

export default BigCard
