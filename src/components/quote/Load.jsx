import React from 'react';
import PropTypes from 'prop-types';

const Load = async (onclick) => (
    <button onclick={onclick}>
        Get New Quote
    </button>
);

Load.propTypes = {
    onclick: PropTypes.func.isRequired,
}

export default Load;