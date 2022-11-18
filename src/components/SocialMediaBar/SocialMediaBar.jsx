import React, { useContext, useEffect } from 'react'

import AppContext from '../../context/AppContext';

import { social } from '../../data/social';

import Link from './Link';

const SocialMediaBar = () => {

  const { store } = useContext(AppContext);
  const { shadowColor } = store;

  useEffect(() => {
    
  }, [])

  return (
    <div className={`absolute z-20 left-0 right-0 bottom-0 mx-auto bg-zinc-900
        flex items-center
        w-56 h-10 xl:w-72 xl:h-12 rounded-tl-3xl rounded-tr-3xl        
        shadow-special-social ${shadowColor} transition-all duration-300`}>        
        {
          social.map(info => <Link key={info.name} Icon={info.icon} link={info.link} />)
        }                      
      </div>
  )
}

export default SocialMediaBar