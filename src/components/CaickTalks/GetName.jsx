import React, { useContext} from 'react'

import AppContext from '../../context/AppContext';

const GetName = () => {

    const { setUsername } = useContext(AppContext);

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    }

    const handleKeyDown = event => {
        if(event.key === 'Enter'){
            alert('opa')
        }
    }

    return (
        <>
            Hello there! I'd be pleased to know your name:
            
            <input 
                className='w-full border-b-2 border-gray-500' 
                type="text"
                onChange={handleUsernameChange}
                onKeyDown={handleKeyDown}
            ></input>
        </>
    )
}

export default GetName