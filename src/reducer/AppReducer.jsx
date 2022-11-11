import { SET_THEME } from './actions';

export const AppReducer = (state, actions) => {
    const { type, payload }= actions;
    const { color } = payload;

    switch(type){
        case SET_THEME:
            return changeTheme(color);
        default:
            return ;
    }
}

const changeTheme = (color, state) => {
    
    switch(color){
        case 'blue':
            return {
                bgColor: 'bg-blue-500',
                shadowColor: 'shadow-blue-500',
                textColor: 'text-blue-500',
                borderColor: 'border-blue-600',
                hoverBorderColor: 'hover:border-blue-600',
            };
        case 'red':
            return {
                bgColor: 'bg-red-500',
                shadowColor: 'shadow-red-500',
                textColor: 'text-red-500',
                borderColor: 'border-red-600',
                hoverBorderColor: 'hover:border-red-600',
            }
        case 'green':
            return {
                bgColor: 'bg-green-500',
                shadowColor: 'shadow-green-500',
                textColor: 'text-green-500',
                borderColor: 'border-green-600',
                hoverBorderColor: 'hover:border-green-600',
            };
        case 'orange':
            return {
                bgColor: 'bg-orange-500',
                shadowColor: 'shadow-orange-500',
                textColor: 'text-orange-500',
                borderColor: 'border-orange-600',
                hoverBorderColor: 'hover:border-orange-600',
            }
        default:
            return {
                ...state,
            }
    }
    
}