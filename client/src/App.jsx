import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'  
import HomePage from './pages/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  // variable to track user/seller
  const isSellerPath= useLocation().pathname.includes('seller');
  // useState for dark/light mode
  let [theme, setTheme]= useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  // useState for menu active class
  let [activeMenu, setActiveMenu]= useState('Home');

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
      <div className='py-5'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>      
    </div>
  )
}

export default App
