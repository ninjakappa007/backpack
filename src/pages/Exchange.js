import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import bgimg from "../assets/images/backgroundNft.jpeg"


const Exchange = () => {

  const {setIsExchange} = useContext(AppContext);

  useEffect(()=>{
    setIsExchange(true);
  },[])

  return (
    <div className='max-w-[1200px] h-[100vh] mx-auto'>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2'>
          <h3 className='text-slate-200 text-5xl font-bold'>Pre Season Begins</h3>
          <p className='text-slate-200 text-2xl font-semibold'>Volume matters: Starting 2/14, trade to compete for your Rank.</p>
          <button className='bg-slate-200 rounded-lg text-black p-3 text-xl font-bold'>Trade Now</button>
        </div>
        <img src={bgimg} className='w-full h-full object-cover' alt='Background Image' />
      </div>

    </div>
  )
}

export default Exchange