import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Assets from './pages/Assets';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Wallet from './pages/Wallet';
import Profile from './pages/Profile';
import Trade from './pages/Trade';
import Exchange from './pages/Exchange';

const ExchangeRoutes = () => {
  return (
    <Routes>
        <Route index element={<Exchange></Exchange>}/>
        <Route path="assets" element={<Assets></Assets>}/>
        <Route path='trade' element={<Trade></Trade>}/>
        <Route path='deposit' element={<Deposit></Deposit>}/>
        <Route path='withdraw' element={<Withdraw></Withdraw>}/>
        <Route path='wallet' element={<Wallet></Wallet>}/>
        <Route path='profile' element={<Profile></Profile>}/>
    </Routes>
  )
}

export default ExchangeRoutes