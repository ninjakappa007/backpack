import React from 'react'
import { Link } from 'react-router-dom'
import { MdBackpack } from "react-icons/md";


const Navbar = (props) => {
  return (
    <div className='flex justify-around gap-[29rem] pt-4'>
        {/* logo */}
        <div className='flex'>
        <Link to="/" className='flex'>
            <MdBackpack className='bg-red text-3xl text-red-500' />
            <h1 className='text-white text-2xl font-bold'>Backpack</h1>
        </Link>
        </div>
        
        {/* buttons */}
        <div className='flex gap-8 text-white font-semibold'>
            <Link to="/exchange">
                <button>Exchange</button>
            </Link>
            {/* <Link to="/login">
                <button>Login</button>
            </Link> */}
            {!props.isLogIn && <Link to="/login">
                <button>Login</button>
            </Link>}
            {props.isLogIn && <Link to="/signup">
                <button>Sign up</button>
            </Link>}
        </div>
    </div>
  )
}

export default Navbar