import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';

export default function Content(props) {
  return (
    <div className='content'>{props.blocks.map( (block, index) => <Block block={block} key={index}/> )}</div>
  );
}

Content.propTypes = {
  blocks: PropTypes.array
}
