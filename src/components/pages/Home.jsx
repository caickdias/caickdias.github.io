import React, { useState, useContext, useEffect } from 'react'

import AppContext from '../../context/AppContext'

import HeroAvatar from '../HeroAvatar'

const Home = ({ visible }) => {

    const { store } = useContext(AppContext);
    const { textColor } = store;
    
    const isVisible = visible ? 0 : 1000;

    return (
        <div 
            className='absolute flex w-full h-full items-center justify-center overflow-hidden'            
        >
            
            <div 
                className='relative flex flex-1 flex-col justify-center mb-36 text-3xl transition-all duration-500'
                style={{ transform: `translate(-${isVisible}px, 0)` }}
            >
                <div className='w-5/6 text-right'>
                <h1>hello! i'm <span className={`font-bold text-4xl ${textColor} transition-all duration-300`}>Caick</span>,</h1>
                <h1>an innovative software developer</h1>
                <h1>with focus on </h1>
                <h1><span className={`font-bold ${textColor} transition-all duration-300`}>front-end</span> development</h1>
                </div>
            </div>

            <div
                className='relative flex flex-1 mb-36 items-center justify-center transition-all duration-500'
                style={{ transform: `translate(${isVisible}px, 0)` }} 
            >
                <HeroAvatar />
            </div>          

        </div>
    )
}

export default Home