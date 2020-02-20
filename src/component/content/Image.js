import React from 'react';
import PropTypes from 'prop-types';
import ImageElement from './ImageElement';

export default function Image(props) {
  return (
    <div className='image'>
      <ImageElement src={props.url} alt={props.captionText}/>
      <div className='caption'>{props.captionText}</div>
    </div>
  );
}

Image.propTypes = {
  url: PropTypes.string,
  captionText: PropTypes.string
}
