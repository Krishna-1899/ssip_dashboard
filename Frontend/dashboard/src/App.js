import './App.css';
import React, { useState } from 'react';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Overview from './components/Overview';
import Signup from './components/signUp';
import Schemes from './components/Schemes';
// import schemes from './components/schemes';
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="App">
      <div className='w-screen h-screen bg-flex flex-col'>
         {/*<ReactSVG src="logo2.svg"/>*/}
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <div className='mt-[140px] flex items-end gap-3 max-w-[1280px] mx-auto'>
          <h1 className='font-bold text-3xl'>Mehesana</h1>
          <h2 className='font-[400] '>(Gujarat)</h2>
        </div>
        <Routes>
          <Route path="/" element={<Overview/>}/>
          <Route path="/schemes" element={<Schemes/>}/>
          <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/SignUp' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        </Routes>
      </div>
    </div>
    )
}

export default App;
