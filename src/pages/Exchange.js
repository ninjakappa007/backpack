import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import bgimg from "../assets/images/backgroundNft.jpeg"
import Table from '../components/Table';


const Exchange = () => {

  const {setIsExchange} = useContext(AppContext);

  useEffect(()=>{
    setIsExchange(true);
  },[])

  return (
    <div className='max-w-[1200px] h-[100vh] mx-auto mt-6 '>

    {/* image part */}
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2'>
          <h3 className='text-red-400 text-5xl font-bold'>Pre Season Begins</h3>
          <p className='text-red-400 text-2xl font-semibold'>Volume matters: Starting 2/14, trade to compete for your Rank.</p>
          <button className='bg-red-400 rounded-lg text-red-100 p-3 text-xl font-bold hover:bg-red-300 duration-200'>Trade Now</button>
        </div>
        <img src={bgimg} className='w-full h-[300px] object-cover rounded-sm' alt='Background Image' />
      </div>

    {/* table */}
    <div>
      <h5 className='text-2xl text-slate-200 font-semibold mt-6'>Cryptoassets</h5>
    </div>
    <Table></Table>
    </div>
  )
}

export default Exchange