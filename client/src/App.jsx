import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'  
import HomePage from './pages/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer';
import { useAppContext } from './context/AppContext';
import Login from './components/Login';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import ScrollToTop from './ScrollToTop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './components/AddAddress';
import MyOrder from './pages/MyOrder';
import SellerLogin from './components/seller/SellerLogin';
import SellerDashboard from './pages/seller/SellerDashboard';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList';
import Orders from './pages/seller/Orders';

function App() {
  // variable to track user/seller
  const isSellerPath= useLocation().pathname.includes('seller');
  // useState for dark/light mode
  let [theme, setTheme]= useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  // useState for menu active class
  let [activeMenu, setActiveMenu]= useState('Home');
  // getting useState from context
  const {showLogin, setShowLogin, isSeller}= useAppContext();

  // update theme using useEffect
  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add('dark');
    } else{
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme',theme);
  },[theme]);

  // check system theme
  useEffect(()=>{
    const prefersDarkMode=window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
  },[]);

  return (
    <div className='dark:bg-[black] bg-[white]'>
      {isSellerPath ? null : <Navbar theme={theme} setTheme={setTheme} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />}
      {showLogin && <Login />}
      <Toaster />
      <div className='py-5'>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage theme={theme} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/my-order' element={<MyOrder />} />
          <Route path= '/seller' element={isSeller ? <SellerDashboard theme={theme} setTheme={setTheme} /> : <SellerLogin />} >
              <Route index element={isSeller? <AddProduct /> : null} />
              <Route path='product-list' element={<ProductList />} />
              <Route path='orders' element={<Orders />} />
          </Route>
        </Routes>
      </div>  
      {isSellerPath ? null : <Footer />}    
    </div>
  )
}

export default App
