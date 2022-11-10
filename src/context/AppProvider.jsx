import { useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {
    const [currentBgColor, setCurrentBgColor] = useState('bg-blue-500');
    const [currentShadowColor, setCurrentShadowColor] = useState('shadow-blue-500');
    const [currentTextColor, setCurrentTextColor] = useState('text-blue-500');
    const [currentBorderColor, setCurrentBorderColor] = useState('border-blue-600');
    const [currentHoverBorderColor, setCurrentHoverBorderColor] = useState('hover:border-blue-600');

    return (
        <AppContext.Provider value={{ 
                currentBgColor, setCurrentBgColor, 
                currentShadowColor, setCurrentShadowColor, 
                currentTextColor, setCurrentTextColor,
                currentBorderColor, setCurrentBorderColor,
                currentHoverBorderColor, setCurrentHoverBorderColor
            }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;