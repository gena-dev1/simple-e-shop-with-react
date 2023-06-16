import React, { useState, useEffect } from 'react'
import PCMenu from '../pc/pages/PCMenu'
import PhMenu from '../phone/pages/PhMenu';
import { getAllSeyfs, getAllOthers, getSeyfCategories, getOthersCategories } from '../api/postFunctions';
import { useLocation } from 'react-router-dom';

const MenuPage = ({ isDesktop }) => {

    const location = useLocation()
    console.log(location.pathname)


    const [products, setProducts] = useState([]);
    const [cathegories, setCathegories] = useState([]);

    const getAllProducts = async () => {
        if(location.pathname === '/seyfs'){
            setProducts(await getAllSeyfs())
            setCathegories(await getSeyfCategories())
        }
        else if(location.pathname === '/others') {
            setProducts(await getAllSeyfs())
            setCathegories(await getSeyfCategories())
        }

    }
    
    
    getAllProducts();
    useEffect(() => {
    }, []);
    
    console.log(cathegories)
    return (
        <div>
            {
                isDesktop
                ?
                <PCMenu productList={products} cathegories={cathegories} />
                :
                <PhMenu productList={products} cathegories={cathegories} />
            }
        </div>
    )
}

export default MenuPage