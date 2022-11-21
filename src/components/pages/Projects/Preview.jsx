import React, { useEffect, useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Preview = ({ project }) => {     
    
    return (
    <div className='flex flex-[2] flex-col'>
           
      <MediaPlayer media={project?.media || []} path={project?.path} />

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

const MediaPlayer = ({ media, path }) => {

  const [index, setIndex] = useState(0);
  const mediaName = media[index] || '';
  const MIN_INDEX = 0;
  const MAX_INDEX = media.length - 1;
  const [selectedMedia, setSelectedMedia] = useState({});

  useEffect(() => {
    const extension = mediaName.split('.');
    const type = extension[1] === 'mp4' ? 'video' : 'other';
  
    setSelectedMedia({ mediaName, type});  
  }, [media, index]);

  useEffect(() => {
    setIndex(0);
  }, [media]);

  const handleMediaChange = action => {
    let newIndex = 0;
    if(action === 'prev'){
      newIndex = Math.min(Math.max(index-1, MIN_INDEX), MAX_INDEX);
    } else if(action === 'next'){
      newIndex = Math.min(Math.max(index+1, MIN_INDEX), MAX_INDEX);      
    }
    setIndex(newIndex);
  }

  return ( 
    <div className='flex px-8 items-center justify-evenly w-full h-3/5'>
      
      
      <button
        className='min-w-[2em]'
        onClick={() => handleMediaChange('prev')}
      >
        { index !== MIN_INDEX &&
          <FaChevronLeft className='hover:scale-125 transition-all duration-300' size={32}/>
        }
      </button>

      <div className='flex items-center justify-center h-full'
      >
      { 
        mediaName !== '' && (                             
        selectedMedia?.type === 'video' ? 
        <video controls         
              className='max-h-full'
              src={require(`../../../assets/projects/${path}/${mediaName}`)} 
              alt='not found'                
            />            
        :     
        <a 
          className='flex items-center justify-center h-full'
          href={require(`../../../assets/projects/${path}/${mediaName}`) || ''}
          target="_blank" 
          rel="noreferrer"
        >   
          <img 
            className='max-h-full'            
            src={require(`../../../assets/projects/${path}/${mediaName}`)} 
            alt='not found' 
          />         
        </a>
        )
      }
      </div>

      <button
        className='min-w-[2em]'
        onClick={() => handleMediaChange('next')}
      >
        { index !== MAX_INDEX &&         
          <FaChevronRight className='hover:scale-125 transition-all duration-300' size={32} />
        }
      </button>
    </div>
  )
}

export default Preview