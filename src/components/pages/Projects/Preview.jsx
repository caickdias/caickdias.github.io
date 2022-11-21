import React, { useEffect } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Preview = ({ project }) => {     
    
  const media = project?.media[0];  
  console.log(media);

  const selectedMedia = {
    name: '',
    type: 'video'
  }

  return (
    <div className='flex flex-[2] flex-col'>
           

            <MediaPlayer media={selectedMedia} />

            <div className='flex flex-col items-center justify-center p-4 text-gray-400'>              

              <Title title={project?.name || ''} />
              
              <Description text={project?.description || ''} />
                  
              <Categories categories={project?.categories || []} />

              <div className='flex justify-evenly items-center w-full'>
              {
                project && 
                Object.entries(project?.external_links)?.map(([name, link]) => <Link key={link} name={name} link={link} />)
              }
              </div>
            </div>

          </div>
  )

  
}

const Title = ({ title }) => {
  return <h1 className='font-bold text-xl text-[#dfe4ea]'>
    {title}
  </h1>
}

const Description = ({ text }) => {
  return  <h1 className='text-base'>
    {text}
  </h1>         
}

const Categories = ({ categories }) => {
  return <span className='m-4'>
        Categories: [ {
        <span> {categories.join(', ').replace('-', ' ')}</span>                  
      }]
    </span>
}

const Link = ({ name, link }) => {
  return <a 
    key={link} 
    className='underline text-blue-400 font-' 
    href={link} 
    target="_blank" 
    rel="noreferrer" >
      {name}
    </a>
}

const MediaPlayer = ({ media }) => {
  return ( 
    <div className='flex px-8 items-center justify-evenly w-full h-1/2'>
      <button>
        <FaChevronLeft className='hover:scale-125 transition-all duration-300' size={32}/>
      </button>

      <div className='flex items-center justify-center h-full'>
      {                              
        media?.type === 'video' ? 
        <video controls         
              className='max-h-full'
              src={require(`../../../assets/projects/divideai/divideai.mp4`)} 
              alt='not found'                
            />            
        :
        <img 
          className='max-h-full'
          src={require(`../../../assets/projects/divideai/${false || 'divideai.gif'}`)} 
          alt='not found' 
        />                
        
      }
      </div>

      <button>
        <FaChevronRight className='hover:scale-125 transition-all duration-300' size={32} />
      </button>
    </div>
  )
}

export default Preview