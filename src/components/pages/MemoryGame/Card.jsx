import React, { useEffect, useState } from 'react'

import { FaReact } from 'react-icons/fa';

const Card = ({ face='down', skill }) => {

    const { name, icon: Icon, color } = skill;

    const bgImageLink = 'https://www.transparenttextures.com/patterns/diagmonds-light.png';

    const [cardFace, setCardFace] = useState(face);
    const [isVisible, setIsVisible] = useState(cardFace === 'up' ? 100 : 0);
    const [backgroundImage, setBackgroundImage] = useState(cardFace === 'up' ? '' : bgImageLink);
    
    const rotation = cardFace === 'up' ? 0 : 180; 

    const handleCardRotation = () => {        
        if(cardFace === 'up'){
            setCardFace('down');
        } else {
            setCardFace('up');
        }
        setTimeout(() => {
            if(cardFace === 'down'){
                setBackgroundImage('');
                setIsVisible(100);
            } else {
                setBackgroundImage(bgImageLink);
                setIsVisible(0);
            }            
        }, 150);
    }


    return (
        <button 
            className='flex items-center m-4 justify-center w-20 h-28 rounded-md bg-neutral-700 border-4 border-zinc-400 transition-all duration-500'
            style={{ 
                backgroundImage: `url(${backgroundImage})`,
                transform: `rotateY(${-rotation}deg)`
            }}
            onClick={handleCardRotation}
        >
            <div className='' style={{ opacity: `${isVisible}` }}>
                <Icon fill={color} size={34} />
            </div>
        </button>
    )
}

export default Card