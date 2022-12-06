import React, { useState, useContext, useEffect, useMemo } from 'react'

import AppContext from '../context/AppContext';

import '../App.css';
import ColorPicker from './ColorPicker';
import CaickTalks from './CaickTalks';

const HeroAvatar = () => {

  const { store, setTheme } = useContext(AppContext);
  const { bgColor, borderColor } = store;
  const [showColorPicker, setShowColorPicker] = useState(false);
  
  const [globalCoords, setGlobalCoords] = useState({ x:0, y:0 });
  const [imageCoords, setImageCoords] = useState({ x:0, y:0 });  
  const [rotation, setRotation] = useState(90);

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
    const r1 = { x: globalCoords.x - imageCoords.x, y: globalCoords.y - imageCoords.y }
    const r2 = { x: 10, y: 0 }
    const adjust1 = r1.y < 0 ? 1 : -1;
    const adjust2 = r1.y < 0 ? 0 : 360;

    const m1 = r1.x * r2.x;
    const m2 = r1.y * r2.y;

    const n1 = Math.sqrt(r1.x*r1.x + r1.y*r1.y);
    const n2 = Math.sqrt(r2.x*r2.x + r2.y*r2.y);

    const result = (m1+m2)/(n1*n2);
    const angle = (Math.acos(result) * 180 / Math.PI);
    
    setRotation(Math.floor(360 - angle - 2) * adjust1 + adjust2);

  }, [globalCoords]);

  
  return (
    <div>                        
        <div 
          ref={el => {
            if(!el) return;
            const width = el.getBoundingClientRect().width; 
            const height = el.getBoundingClientRect().height; 
            const x = el.getBoundingClientRect().x + (width/2)
            const y = el.getBoundingClientRect().y + (height/1.5)
                        
            setImageCoords(prev => {
              if(prev.x === x && prev.y === y) return prev;
              return { x, y }
            })
          }}          
          className={`absolute bottom-[7rem] top-0 right-32 left-0 m-auto 
            w-96 h-96             
            overflow-hidden  
            rounded-b-full caick
            scale-75 xl:scale-100
        `}>            
            <div className={`absolute bottom-[7rem] top-0 right-32 left-0 
              w-96 h-96 
              overflow-hidden transition-all duration-300 
              rounded-full caick 
              border-r-8 ${borderColor} z-20 border-dotted scale-75 xl:scale-100`}
              style={{
                transform: `rotate(${rotation}deg)`
              }}
            >
            </div>
            
            <CaickTalks />

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