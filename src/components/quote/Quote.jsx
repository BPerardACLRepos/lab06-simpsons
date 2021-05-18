import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, character, image }) => (
    <div id="character-quote">
        <figure>
            <img src={image} alt={character} />
            <figcaption>
                {character}
            </figcaption>
        </figure>
        <h2>
            {quote}
        </h2>
    </div>
);

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Quote;