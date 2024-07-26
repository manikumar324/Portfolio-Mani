import React, { useEffect } from 'react';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import { Outlet,useNavigate } from 'react-router-dom';
import Profile from './pages/Profile';
import Footer from './pages/Footer';

const Home = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/about")
    },[])
  return (
    <div>
       <Header></Header>
       <div className='home-page gap-3'>
            <Profile></Profile>
            <div className='w-100'>
                <div className='navbar d-flex justify-content-end'>
                    <Navbar></Navbar>
                </div>
                <div className='overflow-auto'>
                    <Outlet />
                </div>
            </div>
       </div>
       <Footer></Footer>
    </div>
  )
}

export default Home;