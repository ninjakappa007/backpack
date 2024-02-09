import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Exchange from "./pages/Exchange"
import Navbar from "./components/Navbar"
import { GrLinkedin } from "react-icons/gr";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';


function App() {

  const [isLogIn , setIsLogIn] = useState(false)
  
  return (

    <div className='App bg-[#18181b] w-[100vw] h-full mx-auto'>
        <div className='max-w-[1800px] mx-auto'>
        <Navbar isLogIn={isLogIn} setIsLog={setIsLogIn}></Navbar>
            <Routes>
              <Route path="/" element={<Home setIsLogIn={setIsLogIn}></Home>}/>
              <Route path="/login" element={<Login setIsLogIn={setIsLogIn}></Login>}/>
              <Route path='/exchange' element={<Exchange></Exchange>}/>
              <Route path='/signup' element={<Signup></Signup>}/>
              <Route path='/*' element={<PageNotFound></PageNotFound>}/>
            </Routes>
            <div className='h-[100px] flex justify-end items-end'>
              <div className='mb-2 mr-4 text-4xl text-slate-200'>
                  <a href='https://www.linkedin.com/in/ashu00/'><GrLinkedin/></a>
              </div>
                
            </div>
            
            <Toaster />
        </div>
    </div>
  );
}

export default App;
