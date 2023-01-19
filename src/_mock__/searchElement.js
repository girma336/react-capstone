import * as React from 'react';
import PropTypes from 'prop-types';

function HiddenMessage({ children }) {
  const [showMessage, setShowMessage] = React.useState(false);
  return (
    <div>
      {/* eslint-disable-next-line */}
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  );
}

HiddenMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
export default HiddenMessage;
