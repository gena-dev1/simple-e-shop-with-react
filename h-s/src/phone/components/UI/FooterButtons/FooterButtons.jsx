import React from 'react'
import home from '../../../assets/icons/home.png';
import menu from '../../../assets/icons/menu.png';
import shoppingcard from '../../../assets/icons/shoppingcard.png';
import call from '../../../assets/icons/call.png';
import { Link } from 'react-router-dom';

const paths = [
    {path: '/', name: "home", icon: home },
    {path: '/seyfs', name: "menu", icon: menu },
    {path: '/shoppingcard', name: "sebet", icon: shoppingcard },
    {path: '/call', name: "call", icon: call },
]

const FooterButtons = ({ isActive }) => {

    return (
        <>
            <div style={{ boxShadow: "0 8px 13px 15px rgba(0, 0, 0, 0.08)" }} 
               className="h-20 w-full container px-8 flex justify-between items-center bg-white rounded-t-2xl fixed bottom-0 left-0 right-0">
                    {
                        paths.map(p => (
                            <Link to={p.path}>
                                <img src={p.icon} style={{opacity: p.name === isActive ? 1 : 0.2}}/>
                            </Link>
                        ))
                    }
            </div>     
            <div className='h-20'>

            </div>
    </>
    )
}

export default FooterButtons
