import React from 'react';
import PropTypes from 'prop-types';
import {getTextClasses} from '../../domain/ComposeText';

export default function Text(props) {
  return (
    <div className='text'>
      {composeText(props.text, getTextClasses(props.text.length, props.intentions))}
    </div>
  );
}

function composeText(text, formattingData) {
  return formattingData.map( (data, index) => <span className={data.classes} key={index}>{text.substring(data.start, data.end)}</span>);
}

Text.propTypes = {
  text: PropTypes.string,
  intentions: PropTypes.array
}
