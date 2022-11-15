import React, { useState, useEffect } from 'react'

import { skills } from '../../../data/skills';
import Card from './Card';

import { createMemoryGameDeck } from '../../../utils/functions';

const MemoryGame = () => {

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    const newDeck = createMemoryGameDeck(skills);
    setDeck(newDeck);
  }, []);

  return (
    <div className='flex flex-1 flex-wrap '>
    {
      deck?.map(skill => <Card skill={skill} />)
    }
        
    </div>
  )
}

export default MemoryGame