import React from 'react'

const AboutMe = ({ visible }) => {
  
  const isVisible = visible ? 1 : 0;
  const translate = visible ? 0 : 1000;

  return (
      <div 
          className="absolute top-0 bottom-0 left-0 right-0 m-auto 
            flex justify-center pt-8 xl:pt-24
            text-lg transition-all duration-700"
          style={{ opacity: `${isVisible}`, transform: `translate(0, ${translate}px)` }}
      >
        <div className='w-1/2 overflow-y-auto'>
          <p>Hey! My name is Caick and I'm a software developer from Brazil. I have a passion for solving
          challenging problems, exploring new ideas and diving into prominent tech stacks. I'm sociable,
          an effective collaborator and a fast learner. I started my coding journy in college at 17 years old.
          </p>
          <br />

          <p>
          I have designed, developed and succefully launched a mobile app to solve group bill splitting at restaurants. 
          The app is called "Divide aí!" and you can download it <a className='text-blue-400' href="https://linktr.ee/divideai" target="_blank" rel="noreferrer">here</a>.
          </p>
          <br />

          <p>
            I'm also an archery instructor. I love playing music, crafting things, playing video games and learning random stuff. Life is an art!
          </p>
          <br />

          <a
            href={require('../../../assets/caick_andrade_101122.pdf')}
            className="flex justify-center text-blue-400"
            target="_blank" 
            rel="noreferrer"
            download
          >            
            You can download my resume here.
          </a>
        </div>
      </div>
  )
}

export default AboutMe