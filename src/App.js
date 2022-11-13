import { useState, useEffect } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects/Projects';
import SocialMediaBar from './components/SocialMediaBar/SocialMediaBar';

function App() {
  
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHome(false);
    }, 300);
  }, []);

  const handlePageChange = page => {
    setShowHome(!showHome);
  }

  return (
    <div className="App flex items-center flex-col text-[#dfe4ea] overflow-hidden">
      
      <Navbar onChangePage={handlePageChange} />
      
      <div className='absolute left-0 right-0 top-0 bottom-0 m-auto 
        w-full h-full         
        overflow-hidden
        shadow-special-bg shadow-black'>
      </div>
      
      <div className='relative flex flex-1 w-full'>

        <SocialMediaBar />      

        <Home visible={showHome} />
        <Projects />
      </div>
    </div>
  );
}

export default App;
