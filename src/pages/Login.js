import React, { useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Login = (props) => {

  // let location = useLocation();
  // console.log(location.pathname);
  const{setIsLoginPage , setIsHome} = useContext(AppContext);

  useEffect(() => {
    setIsLoginPage(true);
    setIsHome(false);
  },[]);

  // below is just a look to get current location 
  // let location = useLocation();
  // console.log(location.pathname);
  //*******************
  // output : /login

  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  }

  const formHandler = (event) => {
    event.preventDefault();
    if(formData.email==="admin@gmail.com" && formData.password==="11112222"){
      navigate('/exchange');
      setIsLoginPage(false);
    }  
  }

  return (
    <div className=''>
          <div className='w-[100vw] h-[100vh] flex  flex-col justify-center items-center mx-auto'>
          
      <form className='w-[400px] h-[450px] bg-[#27272a] rounded-lg flex flex-col p-16 gap-5 border border-slate-800' onSubmit={formHandler}>

          <h4 className='text-white text-3xl font-bold text-center'>Sign in</h4>
          <p className=' text-slate-500 text-sm mx-auto'>Demo:admin@gmail.com,11112222</p>
          <div>
            <input className='bg-[#18181b] w-[100%] p-2 rounded-lg border border-slate-600 text-white' required onChange={Event=>changeHandler(Event)}
             placeholder='Email' name="email" type='email' value={formData.email}></input>
          </div>

          <div>
            <input className='bg-[#18181b] w-[100%] p-2 rounded-lg border border-slate-600 text-white' required onChange={Event=>changeHandler(Event)}
             placeholder='Password' name='password' type='text' value={formData.password}></input>
          </div>
          
          <div className='flex justify-between'>
            <div className='flex gap-1'>
              <p className='text-white text-sm'>New here ?</p>
              <a className='text-blue-600 text-sm' href=''>Sign up</a>
            </div>

            <div>
              <a className='text-blue-600 text-sm' href=''>Forgot Password</a>
            </div>
          </div>
          {/* <Link to={formData.email && formData.password ? "/exchange" : ""} className='w-[full] h-[40px] bg-white rounded-lg font-semibold text-center'>
            <button type='submit' className='mt-2'>Login</button>
          </Link> */}
          <button type='submit' className='w-[full] h-[40px] bg-white rounded-lg font-semibold text-center'>Login</button>

            
      </form>
      
    </div>
    </div>

  )
}

export default Login
