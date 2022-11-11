import { useReducer } from 'react';

import AppContext from './AppContext';
import { AppReducer } from '../reducer/AppReducer';

import { SET_THEME } from '../reducer/actions';

const initialState = {
    bgColor: 'bg-blue-500',
    shadowColor: 'shadow-blue-500',
    textColor: 'text-blue-500',
    borderColor: 'border-blue-600',
    hoverBorderColor: 'hover:border-blue-600',
}

const AppProvider = ({ children }) => {
    
    const [store, dispatch] = useReducer(AppReducer, initialState);

    const setTheme = color => {
        dispatch({ type: SET_THEME, payload: { color } })
    }

    return (
        <AppContext.Provider value={{ 
                store, setTheme
            }}>
            { children }
        </AppContext.Provider>
    )
}

export default AppProvider;