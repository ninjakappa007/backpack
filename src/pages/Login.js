import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';


const Login = (props) => {
  useEffect(() => {
    props.setIsLogIn(true);
  }, []);

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
    toast('Logged in');
    console.log(formData);
  }

  return (
    <div className=''>
          <div className='w-[100vw] h-[100vh] flex  flex-col justify-center items-center mx-auto'>
      <form className='w-[400px] h-[450px] bg-[#27272a] rounded-lg flex flex-col p-16 gap-7 border border-slate-800' onSubmit={formHandler}>
          <h4 className='text-white text-3xl font-bold text-center'>Sign in</h4>

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
              <p className='text-white '>New here ?</p>
              <a className='text-blue-600' href=''>Sign up</a>
            </div>

            <div>
              <a className='text-blue-600' href=''>Forgot Password</a>
            </div>
          </div>
          <button type='submit' className='w-[full] h-[40px] bg-white rounded-lg font-semibold'>Login</button>

      </form>
    </div>
    </div>

  )
}

export default Login
