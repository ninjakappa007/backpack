import React from 'react'
import cardsdata from "../assets/cardsdata"
import Cards from '../components/Cards'
import img1 from "../assets/images/img1.avif"
import img2 from "../assets/images/img2.avif"
import img3 from "../assets/images/img3.avif"
import img4 from "../assets/images/img4.avif"
import img5 from "../assets/images/img5.avif"
import img6 from "../assets/images/img6.avif"
import { FaArrowRight } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';


const Home = (props) => {
  console.log(cardsdata)
  props.setIsLogIn(false);
  const notify = () => toast('Thanks for subscribing');
  return (

    <div className='w-9/12 mx-auto pt-10'>
      <h2 className='text-left text-2xl text-white font-semibold'>News</h2>
      <div className='grid grid-rows-3 grid-cols-2 gap-20 py-6'>
      {/* cards */}
        <div className='h-[250px] w-[550px] bg-[#27272a] flex px-6 items-center rounded-xl text-white gap-3 hover:scale-105 duration-300'>
          <div>
            <h3 className='text-xl text-left'>{cardsdata[0].title}</h3>
            <br/>
            <p className='text-sm text-left'>{cardsdata[0].info}</p>
            <div className='flex gap-2'>Read <FaArrowRight className='mt-1'/></div>
          </div>
          <div>
            <img src={img1} width="500px" height="200px" className='rounded-xl'></img>
          </div>
        </div>

        <div className='h-[250px] w-[550px] bg-[#27272a] flex px-6 items-center rounded-xl text-white gap-3 hover:scale-105 duration-300'>
          <div>
            <h3 className='text-xl text-left'>{cardsdata[1].title}</h3>
            <br/>
            <p className='text-sm text-left'>{cardsdata[1].info}</p>
            <div className='flex gap-2'>Read <FaArrowRight className='mt-1'/></div>
          </div>
          <div>
            <img src={img2} width="500px" height="200px" className='rounded-xl'></img>
          </div>
        </div>

        <div className='h-[250px] w-[550px] bg-[#27272a] flex px-6 items-center rounded-xl text-white gap-3 hover:scale-105 duration-300'>
          <div>
            <h3 className='text-xl text-left'>{cardsdata[2].title}</h3>
            <br/>
            <p className='text-sm text-left'>{cardsdata[2].info}</p>
            <div className='flex gap-2'>Read <FaArrowRight className='mt-1'/></div>
          </div>
          <div>
            <img src={img3} width="500px" height="200px" className='rounded-xl'></img>
          </div>
        </div>

        <div className='h-[250px] w-[550px] bg-[#27272a] flex px-6 items-center rounded-xl text-white gap-3 hover:scale-105 duration-300'>
          <div>
            <h3 className='text-xl text-left'>{cardsdata[3].title}</h3>
            <br/>
            <p className='text-sm text-left'>{cardsdata[3].info}</p>
            <div className='flex gap-2'>Read <FaArrowRight className='mt-1'/></div>
          </div>
          <div>
            <img src={img4} width="500px" height="200px" className='rounded-xl'></img>
          </div>
        </div>

        <div className='h-[250px] w-[550px] bg-[#27272a] flex px-6 items-center rounded-xl text-white gap-3 hover:scale-105 duration-300'>
          <div>
            <h3 className='text-xl text-left'>{cardsdata[4].title}</h3>
            <br/>
            <p className='text-sm text-left'>{cardsdata[4].info}</p>
            <div className='flex gap-2'>Read <FaArrowRight className='mt-1'/></div>
          </div>
          <div>
            <img src={img5} width="500px" height="200px" className='rounded-xl'></img>
          </div>
        </div>

        <div className='h-[250px] w-[550px] bg-[#27272a] flex px-6 items-center rounded-xl text-white gap-3 hover:scale-105 duration-300'>
          <div className='text-wrap'>
            <h3 className='text-xl text-left'>{cardsdata[5].title}</h3>
            <br/>
            <p className='text-sm text-left'>{cardsdata[5].info}</p>
            <div className='flex gap-2'>Read <FaArrowRight className='mt-1'/></div>
          </div>
          <div>
            <img src={img6} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className='rounded-xl'></img>
          </div>
        </div>



      </div>
      
    <div className='w-[105%] pt-28'>
      <div className='ml-22 pt-10 bg-[#0d9488] h-48 rounded-lg flex justify-around'>
          <div className='flex flex-col gap-3'>
              <p className='text-3xl font-bold text-white'>
              Want Backpack news and updates?
              </p>
              <p className='text-slate-300'>
              Sign up for our Substack to stay up to date.
              </p>
          </div>
          <div>
            <div className='flex gap-2'>
              <input type='email' placeholder='Enter your email' className='w-full p-4 rounded-lg -ml-8'></input>
              <button className='p-1 bg-[#2dd4bf] rounded-lg w-32 text-white hover:bg-[#5eead4] duration-300' onClick={notify}>Notify me</button>
            </div>
            <p className='text-slate-300 -ml-8 pt-1'>We hate spam as much as you do.</p>
          </div>

      </div>
    </div>
    </div>
  )
}

export default Home