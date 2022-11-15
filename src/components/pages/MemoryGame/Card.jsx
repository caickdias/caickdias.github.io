import React, { useEffect, useState } from 'react'

const Card = ({ face, skill, onClick }) => {

    const { name, icon: Icon, color } = skill;

    const bgImageLink = 'https://www.transparenttextures.com/patterns/diagmonds-light.png';

    const [cardFace, setCardFace] = useState(face);
    const [isVisible, setIsVisible] = useState(face === 'up' ? 100 : 0);
    const [backgroundImage, setBackgroundImage] = useState(cardFace === 'up' ? '' : bgImageLink);
    
    const rotation = face === 'up' ? 0 : 180; 

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(face === 'up' ? 100 : 0);
            setBackgroundImage(face === 'up' ? '' : bgImageLink);            
        }, 150);
    },[face]);

    return (
        <button 
            className='m-4 justify-center w-16 h-24 xl:w-20 xl:h-28 rounded-md bg-neutral-700 border-4 border-zinc-400 transition-all duration-500'
            style={{ 
                backgroundImage: `url(${backgroundImage})`,
                transform: `rotateY(${-rotation}deg)`
            }}
            onClick={onClick}
        >
            <div className='flex items-center justify-center' style={{ opacity: `${isVisible}` }}>
                <Icon fill={color} size={34} />
            </div>
        </button>
    )
}

export default Card