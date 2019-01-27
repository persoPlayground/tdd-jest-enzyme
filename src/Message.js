import React from 'react';

/**
 * @function
 * @returns {JSX.Element}
 */
export default ({ success }) => <div data-test-id="message">{success && <p>Correct answer</p>}</div>