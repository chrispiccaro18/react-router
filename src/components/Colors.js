import React from 'react';
import PropTypes from 'prop-types';

function Colors({ match }) {
  const color = match.params.color;
  const divStyle = {
    width: '500px',
    height: '500px',
    backgroundColor: color
  };
  return <div style={divStyle}></div>;
}

Colors.propTypes = {
  match: PropTypes.object.isRequired
};

export default Colors;
