import React from 'react';
import Load from '../../components/quote/Load';
import Quote from '../../components/quote/Quote';
import getQuote from '../../services/simpsonsApi';

const SimposonsQuote = () => {
    const [quote, setQuote] = React.useState({});

    const handleClick = async () => {
        const quote = await getQuote();
        setQuote(quote);
    };

    return (
        <>
            <Load onClick={handleClick} />
            <Quote {...quote} />
        </>
    );
};

export default SimposonsQuote;