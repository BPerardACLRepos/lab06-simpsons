import React from 'react';
import Load from '../../components/quote/Load';
import Quote from '../../components/quote/Quote';
import getQuote from '../../services/simpsonsApi';

const SimposonsQuote = () => {
    const [quote, setQuote] = React.useState({});
    const [loading, setLoad] = React.useState(true);

    const handleClick = async () => {
        const quote = await getQuote();
        setQuote(quote);
        setLoad(false);
    };

    return (
        <>
            <Load onClick={handleClick} />
            {!loading && <Quote {...quote} />}
        </>
    );
};

export default SimposonsQuote;