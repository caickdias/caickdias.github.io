import { useState, useContext } from 'react';

import './App.css';

import AppContext from './context/AppContext';

import HeroAvatar from './components/HeroAvatar';
import Navbar from './components/Navbar/Navbar';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';

function App() {

  const {currentColor, currentShadowColor, currentText } = useContext(AppContext);
  const [shadowColor, setShadowColor] = useState('shadow-red-500');

  return (
    <div className="App flex items-center flex-col text-[#dfe4ea]">
      
      <Navbar />

      <div className='absolute left-0 right-0 top-0 bottom-0 m-auto 
        w-full h-full         
        overflow-hidden
        shadow-special-bg shadow-black'>
      </div>

      <SocialMediaBar />      

      <div className='flex flex-1 w-full items-center justify-center overflow-hidden'>
        <div className='flex flex-1 h-full'>
          <div className='relative flex flex-1 flex-col justify-center mb-36 text-3xl'>
            <div className='w-5/6 text-right'>
              <h1>hello! i'm <span className={`font-bold text-4xl ${currentText}`}>Caick</span>,</h1>
              <h1>an innovative software developer</h1>
              <h1>with focus on </h1>
              <h1><span className='font-bold text-blue-500'>front-end</span> development</h1>
            </div>
          </div>

          <div className='relative flex flex-1 items-center justify-center'>
            <HeroAvatar />
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
