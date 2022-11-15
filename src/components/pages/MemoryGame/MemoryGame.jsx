import React, { useState, useEffect, useContext } from 'react'

import AppContext from '../../../context/AppContext';

import { skills } from '../../../data/skills';
import Card from './Card';

import { createMemoryGameDeck } from '../../../utils/functions';

const MemoryGame = () => {

  const { store } = useContext(AppContext);
  const { borderColor } = store;

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

  const handleResetGame = () => {    
    setRevealedCards([]);
    setSelectedCards([]);
    setTimeout(() => {      
      const newDeck = createMemoryGameDeck(skills)
      setDeck(newDeck);
    }, 150);
  }

  const handleRevealCards = () => {
    setRevealedCards([...skills]);
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
      
      <div className='flex flex-[2] flex-col items-center justify-center pb-12 '>        
        
        <div className='flex flex-col p-4 bg-zinc-900 h-5/6 w-3/5 border-2 border-gray-500 rounded-xl overflow-y-auto'>
          <h1 className='font-bold text-center w-full h-fit pb-2 mb-2 border-b-2 border-gray-700'>
            UNLOCKED SKILLS
          </h1>
          {
            revealedCards.map(skill => {              
              return <div key={skill.name}>
                <p className='mt-1'>{skill.name}</p>
                {
                  skill?.subskills?.map(subskill => 
                    <p key={subskill} className={`ml-4 pl-2 text-gray-400 text-sm border-l-2 ${borderColor}`}>{subskill}</p>
                  )
                }
              </div>
            })
          }
        </div>
      </div>

      <div className='flex flex-[3] flex-col items-center'>
        
        <div className='flex items-end justify-around w-full'>
          
          <button 
            className='h-8 w-32 hover:scale-110 rounded-full font-bold bg-red-500 transition-all duration-300'
            onClick={handleResetGame}
            >
            reset
          </button>

          <h1 className='h-fit xl:mt-10 text-center font-bold text-2xl'>find my skills</h1>
          
          <button 
            className='h-8 w-32 hover:scale-110 rounded-full font-bold bg-amber-500 transition-all duration-300'
            onClick={handleRevealCards}>
            reveal all
          </button>
        </div>
                
        <div className='flex flex-1 items-center overflow-y-auto'>
          <div className='w-full pb-16 xl:pb-40'>
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
    </div>
  )
}

export default MemoryGame