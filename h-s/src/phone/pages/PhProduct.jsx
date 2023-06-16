import React, {useState} from 'react';

import detail1 from '../assets/icons/detail1.png';
import detail2 from '../assets/icons/detail2.png';
import detail3 from '../assets/icons/detail3.png';
import detail4 from '../assets/icons/detail4.png';
import detail5 from '../assets/icons/detail5.png';

// import key from '../assets/icons/key.png';
// import lightning from '../assets/icons/lightning.png';
// import lock from '../assets/icons/lock.png';
// import wifi from '../assets/icons/wifi.png';
import star from '../assets/icons/star.png';
import minisebet from '../assets/icons/minisebet.png';

import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';



const PhProduct = () => {    

    let navigate = useNavigate();
    const location = useLocation();

    const [productInfo] = useState(location.state);
    const [counter, setCounter] = useState(0);
    const [productDetails] = useState(productInfo.productDetails);
    const starCount = productInfo.star;

    const incrementCounter = () => {
        if (counter>0) {
            setCounter(counter-1);
        }
    }

    return (
        <div style={{backgroundColor: 'rgb(193, 223, 203)'}} className='h-screen flex flex-col'>
            <Header bgColor='transparent' headerTitle={''} icon='shoppingcard' />

            <div className='grow flex items-center justify-center'>
                <img 
                    src={`${process.env.PUBLIC_URL}/${productInfo.images.img1}`} 
                    className='w-3/6'
                    alt="" 
                />
            </div>

            <div style={{ borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem' }} 
                className="h-3/5 container px-7 bg-white"
            >
                <div className='h-1/5 flex flex-col items-center'>
                    <hr style={{ backgroundColor: 'rgb(66,109,83)' }} className='w-20 h-1 my-3 justify-self-center' />
                    <div className='w-full flex items-center justify-between'>
                        <span>
                            <h1 style={{ color: 'rgb(11,63,32)' }} className='text-2xl font-bold'>
                                BGX-AD-T27
                            </h1>
                            <div style={{ color: 'rgb(101,168,31)' }} className='flex items-end font-semibold'>
                                { productInfo.cost }
                                {`      `}
                                <div className='flex my-1 ml-2 h-3'>
                                    {(() => {
                                        const rows = [];
                                        for (let i = 0; i < starCount; i++) {
                                            rows.push(<img key={i} src={star} />);
                                        }
                                        return rows;
                                    })()}
                                </div>
                            </div>
                        </span>
                        <span style={{ backgroundColor: 'rgb(66,109,83)' }} className='w-20 h-8 bg-green-500 flex justify-evenly items-center rounded-full'>
                            <p onClick={incrementCounter}
                                className='text-white font-black'
                            >
                                -
                            </p>
                            <p className='text-white font-black'>{counter}</p>
                            <p onClick={() => setCounter(counter+1)}
                                className='text-white font-black'
                            >
                                +
                            </p>
                        </span>
                    </div>
                </div>

                <div className='h-1/5 flex justify-between'>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-11' src={detail1} />
                        <p className='productDetail- font-medium text-sm'>Замок</p>
                        <span className='flex productDetail-detail font-extrabold'>
                            icons
                            {/* {
                                productDetails.lock.map(z => 
                                    <img key={z} src={z} style={{ height: '19px', padding: '3px' }} />
                                )
                            } */}
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-11' src={detail2} />
                        <p className='productDetail-detail font-medium text-sm'>Высота</p>
                        <span className='productDetail-detail font-extrabold -mt-1'>{productDetails.height}</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-11' src={detail3} />
                        <p className='productDetail-detail font-medium text-sm'>Глубина</p>
                        <span className='productDetail-detail font-extrabold -mt-1'>{productDetails.depth}</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-11' src={detail4} />
                        <p className='productDetail-detail font-medium text-sm'>Ширина</p>
                        <span className='productDetail-detail font-extrabold -mt-1'>{productDetails.width}</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-11' src={detail5} />
                        <p className='productDetail-detail font-medium text-sm'>Вес</p>
                        <span className='productDetail-detail font-extrabold -mt-1'>{productDetails.weight}</span>
                    </div>
                </div>


                <div className='h-3/5 flex flex-col justify-end py-4'>
                    <p className='font-semibold productDetail-detail'>
                    Описание
                    </p>
                    <p className='h-24 my-2 font-normal productDetail-detail pr-2 overflow-y-auto'>
                        {productInfo.fullInfo}
                    </p>
                    <p>
                        <button className='h-14 w-full shadow-2xl my-4 rounded-2xl flex items-center justify-center bg-green-800' >
                            <p className='mr-3'><img src={minisebet} /> </p>
                            <p className='-mt-2 text-white text-2xl'>купит сейчас</p>
                        </button>
                    </p>
                </div>
               
            </div>
        </div>
    )
}

export default PhProduct
