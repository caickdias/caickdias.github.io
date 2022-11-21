import React, { useContext } from 'react'

import AppContext from '../../../context/AppContext';

const Thumbnail = ({ data, selected, onClick }) => {
  
    const { store } = useContext(AppContext);
    const { textColor, shadowColor, hoverShadowColor } = store;

    const { name, thumbnail } = data;
    
    return (
        <button className={`w-32 h-24 m-2 border-2 rounded-xl bg-zinc-900
            border-gray-500 hover:scale-110 
            ${hoverShadowColor} ${selected && shadowColor} shadow-md transition-all duration-[100]`}
            onClick={onClick}
        >
        {
            thumbnail.length > 0 
            ? <img 
            className='w-full h-full rounded-xl'
            src={require(`../../../assets/thumbnails/${thumbnail || 'not_found.jpg'}`)} 
            alt='not found' 
            />
            : <h1 className={`${selected && textColor} transition-all duration-300`}>{name}</h1>            
        }            
        </button>
    )
}

export default Thumbnail