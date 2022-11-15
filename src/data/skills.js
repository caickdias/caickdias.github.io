import { AiFillHtml5 } from 'react-icons/ai';
import { FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiCss3 } from 'react-icons/si';

export const skills = [
    {
        name: 'React',
        icon: FaReact,
        color: '#61DAFB',
        subskills: [
            'React Hooks',
            'Context API',
            'React-router-dom',
            'Hook-form',
            'Chartjs',
            'React Query',
        ]
    },
    {
        name: 'React Native',
        icon: FaReact,
        color: '#3263C5',
        subskills: [
            'Expo',
            'Dev Client',
            'Mlrkit OCR',
            'React Navigation',
        ]
    },
    {
        name: 'Javascript',
        color: '#EAD41C',
        icon: SiJavascript,
        subskills: [
            'ES6',
            'Declarative paradigms',
            'Async/await',
            'Fetch apis'
        ]
    },
    {
        name: 'Typescript',
        icon: SiTypescript,
        color: '#2F72BC',
        subskills: [],
    },
    {
        name: 'HTML',
        color: '#D84924',
        icon: AiFillHtml5,
        subskills: [],
    },
    {
        name: 'CSS',
        color: '#2449D8',
        icon: SiCss3,
        subskills: [],
    },
    {
        name: 'Node',        
        icon: FaNode,
        color: '#56A342',
        subskills: ['Rest API']
    },
    {
        name: 'Github',
        icon: FaGitAlt,
        color: '#E44C30',
        subskills: ['Rest API']
    },


]