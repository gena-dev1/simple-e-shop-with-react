import React, { useState, useEffect } from 'react'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getAllSeyfs, getAllOthers, getCathegories } from './api/postFunctions';
import MainPage from './pages/MainPage';
import MenuPage from './pages/MenuPage';
import ProductDetail from './pages/ProductDetail';
import ShoppingCardPage from './pages/ShoppingCardPage';



const App = () => {
  let width = window.innerWidth;

  const [seyfs, setSeyfs] = useState([]);
  const [others, setOthers] = useState([]);
  // const [cathegories, setCathegories] = useState([]);

  
  
  const getAllProducts = async () => {
    console.log(1234567)
    const allSeyfs = await getAllSeyfs()
    if(allSeyfs) setSeyfs(allSeyfs)
    const allOthers = await getAllOthers()
    if(allOthers) setOthers(allOthers)
  }

  // const getAllCaths = async () => {
  //   const cath = await getCathegories();
  //   if(cath) setCathegories(cath);
  // }
  
  useEffect(() => {
    getAllProducts();
  }, []);

  
  return (
    <div className=' overflow-x-hidden'>
      <Router>

        <Routes>
          <Route exact path="/" element={ <MainPage isDesktop={width > 450 ? true : false} products={seyfs} /> }/>
          <Route exact path="/seyfs" element={ <MenuPage isDesktop={width > 450 ? true : false} /> }/>
          <Route exact path="/others" element={ <MenuPage isDesktop={width > 450 ? true : false} /> }/>
          <Route exact path="/seyfs/:id" element={ <ProductDetail isDesktop={width > 450 ? true : false} /> }/>
          <Route exact path="/others/:id" element={ <ProductDetail isDesktop={width > 450 ? true : false} /> }/>
          <Route exact path="/shoppingcard" element={ <ShoppingCardPage isDesktop={width > 450 ? true : false} /> }/>
        </Routes>

      </Router>
      
    </div>
  )
}

export default App
