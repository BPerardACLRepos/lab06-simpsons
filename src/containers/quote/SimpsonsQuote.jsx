import React from 'react';
import getQuote from '../../services/simpsonsApi';

const SimposonsQuote = () => {
    const [quote, setQuote] = React.useState({});

    const handleClick = async () => {
        const quote = await getQuote();
        setQuote(quote);
    }

    return (
        <>

        </>
    );
};

export default SimposonsQuote;