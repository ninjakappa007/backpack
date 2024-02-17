import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Exchange from "./pages/Exchange"
import Navbar from "./components/Navbar"
import { GrLinkedin } from "react-icons/gr";
import { useContext, useState } from 'react';
import Toaster from 'react-hot-toast';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import { AppContext } from './context/AppContext';
import ExchangeNavbar from './components/ExchangeNavbar';
import ExchangeRoutes from './ExchangeRoutes';


function App() {

  const {isExchange} = useContext(AppContext);

  return (

    <div className='App bg-[#18181b] w-[100vw] h-full mx-auto'>
        <div className='max-w-[1800px] mx-auto'>
        {!isExchange ? (<Navbar></Navbar>) : (<ExchangeNavbar/>)}
            <Routes>
              <Route path="/" element={<Home></Home>}/>
              <Route path="/login" element={<Login></Login>}/>
              <Route path='/signup' element={<Signup></Signup>}/>

              <Route path='/exchange/*' element = {<ExchangeRoutes></ExchangeRoutes>}>
                </Route>
               
              <Route path='/*' element={<PageNotFound></PageNotFound>}/>

            </Routes>
            <div className='h-[100px] flex justify-end items-end'>
              <div className='mb-2 mr-4 text-4xl text-slate-200'>
                  <a href='https://www.linkedin.com/in/ashu00/' target='_blank' rel="noreferrer"><GrLinkedin/></a>
              </div>
                
            </div>
            
            <Toaster />
        </div>
    </div>
  );
}

export default App;
