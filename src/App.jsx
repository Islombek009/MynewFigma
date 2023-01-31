import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import FreeDelivery from './components/FreeDelivery';
import FreeDelivery2 from './components/FreeDelivery2';
import FreeDelivery3 from './components/FreeDelivery3';
import Fruits from './components/Fruits';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import NewProducts2 from './components/NewProducts2';
import ThreeCards from './components/ThreeCards';
import Vegetables from './components/Vegetables';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Home/>
          <Routes>
           <Route path="/carousel" element={Carousel}></Route>
           <Route path="/home" element={Home}></Route>
           <Route path="/newproducts" element={NewProducts}></Route>
           <Route path="/newproducts2" element={NewProducts2}></Route>
           <Route path='/freedelivery' element={FreeDelivery}></Route>
           <Route path='/freedelivery2' element={FreeDelivery2}></Route>
           <Route path='/freedelivery3' element={FreeDelivery3}></Route>
           <Route path='/threeCards' element={ThreeCards}></Route>
           <Route path='/fruits' element={Fruits}></Route>
           <Route path='/vegetables' element={Vegetables}></Route>



          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
