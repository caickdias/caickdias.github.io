import { useReducer, useState } from 'react';

import CaickTalksContext from './CaickTalksContext';
import CaickTalksReducer from '../reducer/CaickTalksReducer';

const initialState = {
    hasVisitedHome: false,
    hasUsername: false,
}

const CaickTalksProvider = ({ children }) => {
    
    const [store, dispatch] = useReducer(CaickTalksReducer, initialState);    
    const [username, setUsername] = useState('');
    const [showCaickTalks, setShowCaickTalks] = useState(false);


    return (
        <CaickTalksContext.Provider value={{ 
                store,
                username, setUsername,
                showCaickTalks, setShowCaickTalks
            }}>
            { children }
        </CaickTalksContext.Provider>
    )
}

export default CaickTalksProvider;