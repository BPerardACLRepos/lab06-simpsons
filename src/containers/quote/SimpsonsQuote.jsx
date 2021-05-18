import React from 'react';
import Load from '../../components/quote/Load';
import Quote from '../../components/quote/Quote';
import getQuote from '../../services/simpsonsApi';

const SimposonsQuote = () => {
    const [quote, setQuote] = React.useState({ character: '' });

    const handleClick = async () => {
        const quote = await getQuote();
        setQuote(quote);
    };

    return (
        <>
            <Load onClick={handleClick} />
            {quote.character.length !== 0 && <Quote {...quote} />}
        </>
    );
};

export default SimposonsQuote;