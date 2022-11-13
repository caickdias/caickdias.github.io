import React, { useContext } from 'react'

import AppContext from '../../../context/AppContext';

const Project = ({ data }) => {
  
    const { store } = useContext(AppContext);
    const { hoverShadowColor } = store;

    const { name, description, categories, external_links, thumbnail } = data;
    
    return (
        <button className={`w-32 h-24 m-2 border-2 rounded-xl
        border-gray-500 hover:scale-110 
        hover:shadow-blue-500 shadow-md transition-all duration-[100]`}>

            <img 
                className='w-full h-full rounded-xl'
                src={require(`../../../assets/thumbnails/${thumbnail || 'not_found.jpg'}`)} 
                alt='not found' 
            />            
            
        </button>
    )
}

export default Project