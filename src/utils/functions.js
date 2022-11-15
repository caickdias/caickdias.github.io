const createMemoryGameDeck = cards => {
    return [...cards, ...cards].sort(() => Math.random() - 0.5);
}

export {
    createMemoryGameDeck,
}