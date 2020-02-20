import React from 'react';
import PropTypes from 'prop-types';

export default function Quote(props) {
  return (
    <div className='quote'>
      <div className='text'>{props.text}</div>
      <div className='attribution'>{props.attribution}</div>
    </div>
  );
}

Quote.propTypes = {
  text: PropTypes.string,
  attribution: PropTypes.string
}
