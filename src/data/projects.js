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
        path: 'divideai',
        description: 'Mobile app for splitting group bills',
        categories: [REACT_NATIVE],
        external_links: {
            'Github': 'https://github.com/caickdias/divideai-public',
            'Download': 'https://linktr.ee/divideai',
        },
        thumbnail: 'divideai.png',
        media: [            
            'divideai.gif',
            'home-no-table.png',
            'create-table.png',
            'current-table-items.png',
            'add-item.png',
            'who-paid.png',
        ],
    },
    {
        name: 'Equation alarm clock',
        path: 'alarmclock',
        description: 'An alarm clock where you have to solve given equation to turn it off',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/alarm-clock',
            'Try it': 'https://caickdias.github.io/alarm-clock/'
        },
        thumbnail: '',
        media: [
            'alarm-1.png',
            'alarm-2.png',
            'alarm-3.png',
        ],
    },
    {
        name: 'URL Parser',
        path: 'urlparser',
        description: 'Paste your URL and the app will parse its information',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/url-parser',
            'Try it': 'https://caickdias.github.io/url-parser/'
        },
        thumbnail: '',
        media: [
            'parser-1.png',
            'parser-2.png',
        ],
    },
    {
        name: 'Memory Game',
        path: 'memorygame',
        description: 'My first RN project. A simple, but fully working memory game',
        categories: [REACT_NATIVE],
        external_links: {
            'Github': 'https://github.com/caickdias/memory-game',
        },
        thumbnail: '',
        media: [
            'memory-game-1.gif',
        ],
    },
    {
        name: 'Invoice generator',
        path: 'invoicegenerator',
        description: 'Generate basic PDF invoices with Node',
        categories: [NODE],
        external_links: {
            'Github': 'https://github.com/caickdias/invoice-generator',
        },
        thumbnail: '',
        media: [
            'invoice-1.png',
        ],
    },
    {
        name: 'Static site shell script',
        path: 'shellsite',
        description: 'A shell script for generating static html sites',
        categories: [SHELL],
        external_links: {
            'Github': 'https://github.com/caickdias/shell-script-static-site',
        },
        thumbnail: '',
        media: [
            'shell-1.png',
        ],
    },
    {
        name: 'Background generator',
        path: 'bggenerator',
        description: 'Tool for creating simple background images',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/background-generator'
        },
        thumbnail: '',
        media: [
            'bg-1.png',
        ],
    },
    {
        name: 'Pokemon API',
        path: 'pokemonapi',
        description: 'A simple RN app to fetch pokemon API',
        categories: [REACT_NATIVE],
        external_links: {
            'Github': 'https://github.com/caickdias/pokemon-api-practice',
        },
        thumbnail: '',
        media: [
            'pokemon-1.gif',
        ],
    },
    {
        name: 'Discord bot',
        path: 'discordbot',
        description: 'A bot that will send beecrowd exercises when asked to',
        categories: [NODE],
        external_links: {
            'Github': 'https://github.com/caickdias/godev-discord-bot',
        },
        thumbnail: '',
        media: [
            'discordbot-1.png',
        ],
    },
    {
        name: 'Blaze crash scrap',
        path: 'blazecrash',
        description: 'Web scraping with puppeteer for site blaze game values',
        categories: [WEB_SCRAPING],
        external_links: {
            'Github': 'https://github.com/caickdias/blaze-crash-scrap',
        },
        thumbnail: '',
        media: [
            'blaze-1.png',
        ],
    },
    {
        name: 'Portfolio website',
        path: 'portfolio',
        description: 'Well.. you are here',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/portfolio',
        },
        thumbnail: '',
        media: [
            'portfolio-1.png',
        ],
    },
    {
        name: 'Dashboard archery',
        path: 'dashboardarchery',
        description: 'A system for archery clubs',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/dashboard-archery',
        },
        thumbnail: '',
        media: [
            'dash-1.png',
        ],
    },
    {
        name: 'Dashboard archery API',
        path: 'dashboardarcheryapi',
        description: 'Rest API for my dashboard archery dashboard',
        categories: [REST_API, NODE],
        external_links: {
            'Github': 'https://github.com/caickdias/crud-api-express-nedb-joi',
        },
        thumbnail: '',
        media: [
            'dash-api-1.png',
        ],
    },
    {
        name: 'Chess',
        path: 'chess',
        description: 'A multiplayer chess game to be used with socket.io',
        categories: [REACT],
        external_links: {
            'Github': 'https://github.com/caickdias/chess',
        },
        thumbnail: '',
        media: [
            'chess-1.png',
        ],
    },
    {
        name: 'Chess server socket.io',
        path: 'chessserver',
        description: 'Socketio server for chess project',
        categories: [SOCKETIO],
        external_links: {
            'Github': 'https://github.com/caickdias/chess-socket-io-server',
        },
        thumbnail: '',
        media: [
            'chess-server-1.png',
        ],
    },
    {
        name: 'Chat rooms',
        path: 'chatrooms',
        description: 'Chat rooms with socketio',
        categories: [REACT, SOCKETIO],
        external_links: {
            'Github': 'https://github.com/caickdias/socketio-rooms',
        },
        thumbnail: '',
        media: [
            'rooms-1.png',
            'rooms-2.png',
            'rooms-3.png',
        ],
    }
]