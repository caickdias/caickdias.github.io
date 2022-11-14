import React, { useState, useContext, useEffect } from 'react'

import AppContext from '../context/AppContext';

import '../App.css';
import ColorPicker from './ColorPicker';


const HeroAvatar = () => {

  const { store, setTheme } = useContext(AppContext);
  const { bgColor, borderColor } = store;
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  const [coords, setCoords] = useState({ x:0, y:0 });
  const [globalCoords, setGlobalCoords] = useState({ x:0, y:0 });

  const handleThemeChange = color => {
    setShowColorPicker(false);
    setTheme(color);
  }

  useEffect(() => {
    const handleWindowMouseMove = event => {      
        setGlobalCoords({
            x: event.screenX,
            y: event.screenY,
        });            
    }

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  }, []);

  useEffect(() => {
    //console.log(globalCoords)
  }, [globalCoords])

  const handleMouseMove = event => {
      //console.log(`x: ${event.clientX} y: ${event.clientY}`);      
      
      setCoords({
          x: event.clientX - event.target.offsetLeft,
          y: event.clientY - event.target.offsetTop,
      })
  }

  return (
    <div>                        
        <div 
          ref={el => {
            if(!el) return;
            //console.log(el.getBoundingClientRect().y);
          }}
          onMouseMove={handleMouseMove}
          className={`absolute bottom-[7rem] top-0 right-32 left-0 m-auto 
            w-96 h-96 
            overflow-hidden transition-all duration-300 
            rounded-full caick
            border-b-8 ${borderColor} border-dotted
        `}>            
            
            <button className='absolute -top-6 bottom-0 left-0 -right-4 m-auto 
              z-30 w-[1.1rem] h-[1.1rem] tattoo 
              opacity-40 transition-all duration-300'
              onClick={() => setShowColorPicker(!showColorPicker)}
            >              
            </button>

            
              <img
                style={{ opacity: `${bgColor === 'bg-red-500' ? 100 : 0}` }} 
                className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
                transition-all duration-500' 
                width={300}
                src={require('../assets/caick-red.png')} alt="not found"
              />
                        
              <img 
                style={{ opacity: `${bgColor === 'bg-blue-500' ? 100 : 0}` }} 
                className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
                transition-all duration-500' 
                width={300}
                src={require('../assets/caick-blue.png')} alt="not found"
              />

              <img 
                style={{ opacity: `${bgColor === 'bg-green-500' ? 100 : 0}` }} 
                className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
                transition-all duration-500' 
                width={300}
                src={require('../assets/caick-green.png')} alt="not found"
              />

              <img 
                style={{ opacity: `${bgColor === 'bg-orange-500' ? 100 : 0}` }} 
                className='absolute -bottom-0 top-0 right-0 left-0 m-auto             
                transition-all duration-500' 
                width={300}
                src={require('../assets/caick-orange.png')} alt="not found"
              />
            

            <div 
              style={{ opacity: `${showColorPicker ? 100 : 0}` }}
              className='absolute top-10 bottom-0 right-28
              z-30 w-8 h-28 transition-all duration-300'>
              <ColorPicker onThemeChange={handleThemeChange} />
            </div>

        </div>

    </div>
  )
}

export default HeroAvatar;