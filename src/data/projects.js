import {
    REACT,
    REACT_NATIVE,
    NODE,
    SHELL,
    REST_API,
    SOCKETIO,
    WEB_SCRAPING
} from '../utils/actions';

export const projects = [
    {
        name: 'Divide aí!',
        description: 'Mobile app for splitting group bills',
        categories: [REACT_NATIVE],
        external_links: {
            'Github': 'https://github.com/caickdias/divideai-public',
            'Download': 'https://linktr.ee/divideai',
        },
        thumbnail: 'divideai.png',
        media: [
            'divideai.mp4',
            'divideaí.gif',
        ],
    },
    {
        name: 'Equation alarm clock',
        description: 'An alarm clock where you have to solve given equation to turn it off',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/alarm-clock',
            'Try it': 'https://caickdias.github.io/alarm-clock/'
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'URL Parser',
        description: 'Paste your URL and the app will parse its information',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/url-parser',
            'Try it': 'https://caickdias.github.io/url-parser/'
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Memory Game',
        description: 'My first RN project. A simple, but fully working memory game',
        categories: [REACT_NATIVE],
        external_links: {
            'Github': 'https://github.com/caickdias/memory-game',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Invoice generator',
        description: 'Generate basic PDF invoices with Node',
        categories: [NODE],
        external_links: {
            'Github': 'https://github.com/caickdias/invoice-generator',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Static site shell script',
        description: 'A shell script for generating static html sites',
        categories: [SHELL],
        external_links: {
            'Github': 'https://github.com/caickdias/shell-script-static-site',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Background generator',
        description: 'Tool for creating simple background images',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/background-generator'
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Pokemon API',
        description: 'A simple RN app to fetch pokemon API',
        categories: [REACT_NATIVE],
        external_links: {
            'Github': 'https://github.com/caickdias/pokemon-api-practice',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Discord bot',
        description: 'A bot that will send beecrowd exercises when asked to',
        categories: [NODE],
        external_links: {
            'Github': 'https://github.com/caickdias/godev-discord-bot',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Blaze crash scrap',
        description: 'Web scraping with puppeteer for site blaze game values',
        categories: [WEB_SCRAPING],
        external_links: {
            'Github': 'https://github.com/caickdias/blaze-crash-scrap',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Portfolio website',
        description: 'Well.. you are here',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/portfolio',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Dashboard archery',
        description: 'A system for archery clubs',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/dashboard-archery',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Dashboard archery API',
        description: 'Rest API for my dashboard archery dashboard',
        categories: [REST_API, NODE],
        external_links: {
            'Github': 'https://github.com/caickdias/crud-api-express-nedb-joi',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Chess',
        description: 'A multiplayer chess game to be used with socket.io',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/chess',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Chess server socket.io',
        description: 'Socketio server for chess project',
        categories: [SOCKETIO],
        external_links: {
            'Github': 'https://github.com/caickdias/chess-socket-io-server',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    },
    {
        name: 'Chat rooms',
        description: 'Chat rooms with socketio',
        categories: [REACT, SOCKETIO],
        external_links: {
            'Github': 'https://github.com/caickdias/socketio-rooms',
        },
        thumbnail: '',
        media: [
            'divideaí.gif'
        ],
    }
]