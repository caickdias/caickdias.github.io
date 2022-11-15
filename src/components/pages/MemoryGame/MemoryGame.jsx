import React, { useState, useEffect } from 'react'

import { skills } from '../../../data/skills';
import Card from './Card';

import { createMemoryGameDeck } from '../../../utils/functions';

const MemoryGame = () => {

  const [deck, setDeck] = useState([]);
  const [revealedCards, setRevealedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const newDeck = createMemoryGameDeck(skills)
    setDeck(newDeck);
  }, []);


  const checkCards = index => {
    const firstCard = deck[selectedCards[0]];
      const secondCard = deck[index];
      if(firstCard.name === secondCard.name){
        return true;
      }
  }

  const handleCardSelection = (skill, index) => {    
      
    if(selectedCards.length === 0){
      setSelectedCards([index]);
    } else if(selectedCards[0] === index || selectedCards.length > 1){
      return;
    } else {
      setSelectedCards(card => [...card, index]);
      
      if(checkCards(index)){
        setRevealedCards(cards => [...cards, skill]);
        setSelectedCards([]);
      }
      else {
        setTimeout(() => {
          setSelectedCards([]);
        }, 500);
      }
    }
       
  }

  return (
    <div className='flex flex-1 h-full overflow-hidden'>
      
      <div className='flex flex-[2] '>
        <div className='flex flex-1 bg-red-500'>

        </div>
      </div>

      <div className='flex flex-[3] flex-col items-center'>
        
        <h1 className='w-full h-fit text-center font-bold text-2xl'>find my skills</h1>
                
        <div className='flex flex-wrap'>
        {
          deck?.map((skill, index) => {     
            const selected = selectedCards.includes(index) || revealedCards.includes(skill);
            
            return (
            <Card 
              key={index} 
              face={selected ? 'up' : 'down'} 
              skill={skill} 
              onClick={() => handleCardSelection(skill, index)}             
            />
            )
          })
        }
        </div>        

      </div>        
    </div>
  )
}

export default MemoryGame