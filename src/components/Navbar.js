import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdBackpack } from "react-icons/md";
import { AppContext } from '../context/AppContext';


const Navbar = () => {

const {isLoginPage,isHome} = useContext(AppContext);

  return (
    <div className='flex justify-between  pt-4 max-w-[1300px] mx-auto'>
        {/* logo */}
        <div className='flex'>
        <Link to="/" className='flex'>
            <MdBackpack className='bg-red text-3xl text-red-500' />
            <h1 className='text-white text-2xl font-bold'>Backpack</h1>
        </Link>
        </div>
        
        {/* buttons */}
        <div className='flex gap-8 text-white font-semibold'>
            
            {isHome && 
                <Link to="/login">                    
                    <button>Login</button>
                </Link>
            }

            {isLoginPage &&
                <Link to="/signup">
                    <button>Sign up</button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar