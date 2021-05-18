const getQuote = async (numberOfQuotes = 1) => {
    const res = await fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${numberOfQuotes}`);
    const json = await res.json();
    return json[0]; // returns single quote instead of array, change this before switching to multiple quotes
}

// Simpsons API return shape
//
// [
//     {
//     "quote": "Oh Yeah!",
//     "character": "Duffman",
//     "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
//     "characterDirection": "Left"
//     }
// ]