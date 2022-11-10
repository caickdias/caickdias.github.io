import { useState } from 'react';

import './App.css';
import HeroAvatar from './components/HeroAvatar';



import Navbar from './components/Navbar/Navbar';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';

function App() {

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
          <div className='flex flex-1'>

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
