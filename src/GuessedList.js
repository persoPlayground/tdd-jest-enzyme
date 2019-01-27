import React from 'react';
import PropTypes from 'prop-types';

const GuessedList = ({ wordsList: guessedList }) => {
  return (
<div data-test-id="guessed-list">
{ !guessedList.length ? <div data-test-id="instructions">INstructions...</div> : <div data-test-id="component-list"> <div data-test-id="words">
<div data-test-id="word-try"></div><div data-test-id="word-try"></div><div data-test-id="word-try"></div>
</div>
 </div>}
</div>
  );
}

GuessedList.propTypes = {
    wordsList: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}
export default GuessedList;
