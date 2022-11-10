import { useState } from 'react';

import './App.css';

import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as Github } from './assets/github.svg';
import Navbar from './assets/components/Navbar';

function App() {

  const [shadowColor, setShadowColor] = useState('shadow-white');

  return (
    <div className="App text-[#dfe4ea]">
      
      <Navbar />

      <div className='absolute left-0 right-0 top-0 bottom-0 m-auto 
        w-full h-full         
        overflow-hidden
        shadow-special-bg shadow-black'>
      </div>

      <div className={`absolute left-0 right-0 bottom-0 mx-auto bg-slate-900
        flex items-center justify-evenly
        w-72 h-12 rounded-tl-3xl rounded-tr-3xl
        shadow-special-social shadow-red-500 transition-all duration-300`}>        
        
        <Linkedin className='hover:scale-125 transition-all duration-300 ' />
        <Github className='hover:scale-125 transition-all duration-300 ' />
        <Linkedin className='hover:scale-125 transition-all duration-300 ' />
        <Linkedin className='hover:scale-125 transition-all duration-300ml-12' />
        
        
      </div>

    </div>
  );
}

export default App;
