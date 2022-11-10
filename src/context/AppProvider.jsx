import { useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('bg-blue-500');
    const [currentShadowColor, setCurrentShadowColor] = useState('shadow-blue-500');
    const [currentText, setCurrentText] = useState('text-blue-500');

    return (
        <AppContext.Provider value={{ 
                currentColor, setCurrentColor, 
                currentShadowColor, setCurrentShadowColor, 
                currentText, setCurrentText
            }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;