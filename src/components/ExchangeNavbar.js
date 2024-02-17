import React from 'react'
import { Link } from 'react-router-dom'
import { MdBackpack } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { HiOutlineWallet } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";



const ExchangeNavbar = () => {
  return (
 <div className='flex justify-between  pt-4 max-w-[1300px] mx-auto'>

    {/* left */}

      <div className='flex gap-7'>
        <Link to="/" className='flex'>
            <MdBackpack className='bg-red text-3xl text-red-500' />
            <h1 className='text-white text-2xl font-bold'>Backpack</h1>
        </Link>
        
        <Link to="exchange/assets">
          <button className='text-slate-300 hover:text-slate-50 duration-200 text-sm font-bold mt-2'>Assets</button>
        </Link>

        <Link to="exchange/trade">
          <button className='text-slate-300 hover:text-slate-50 duration-200 text-sm font-bold mt-2'>Trade</button>
        </Link>
      </div>

    
    {/* right */}
    <div className='flex gap-7'>

        <Link to="exchange/deposit">
          <button className='bg-[#022c22] p-2 rounded-lg text-sm font-semibold text-[#6ee7b7]'>Deposit</button>
        </Link>

        <Link to="exchange/withdraw">
          <button className='bg-[#172554] p-2 rounded-lg text-sm font-semibold text-[#3b82f6]'>Withdraw</button>
        </Link>

        <Link to="exchange/wallet">
          <button className='text-4xl text-slate-500'><HiOutlineWallet /></button>
        </Link>

        <Link to="exchange/profile">
          <button className='text-4xl text-slate-500'><CgProfile /></button>
        </Link> 

    </div>




</div>
  )
}

export default ExchangeNavbar