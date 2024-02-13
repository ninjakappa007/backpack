import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Exchange from "./pages/Exchange"
import Navbar from "./components/Navbar"
import { GrLinkedin } from "react-icons/gr";
import { useState } from 'react';
import Toaster from 'react-hot-toast';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import Assets from './pages/Assets';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import Trade from './pages/Trade';


function App() {

  
  return (

    <div className='App bg-[#18181b] w-[100vw] h-full mx-auto'>
        <div className='max-w-[1800px] mx-auto'>
        <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home></Home>}/>
              <Route path="/login" element={<Login></Login>}/>
              <Route path='/exchange' element={<Exchange></Exchange>} />
              <Route path='/signup' element={<Signup></Signup>}/>
              <Route path="/assets" element={<Assets></Assets>}/>
              <Route path='/trade' element={<Trade></Trade>}/>
              <Route path='/deposit' element={<Deposit></Deposit>}/>
              <Route path='/withdraw' element={<Withdraw></Withdraw>}/>
              <Route path='/wallet' element={<Wallet></Wallet>}/>
              <Route path='/profile' element={<Profile></Profile>}/>

              <Route path='/*' element={<PageNotFound></PageNotFound>}/>

            </Routes>
            <div className='h-[100px] flex justify-end items-end'>
              <div className='mb-2 mr-4 text-4xl text-slate-200'>
                  <a href='https://www.linkedin.com/in/ashu00/' target='_blank' rel="noreferrer"><GrLinkedin/></a>
              </div>
                
            </div>
            
            <Toaster />
        </div>
    </div>
  );
}

export default App;
