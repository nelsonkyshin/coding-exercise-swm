import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Quote from './Quote';
import Text from './Text';

export default function Block(props) {
  const block = getBlock(props.block);
  return block ? <div className='block'>{block}</div> : null;
}

Block.propTypes = {
  block: PropTypes.object
}

function getBlock(block) {
  if (block.kind === 'text')
    return getText(block);
  else if (block.kind === 'pull-quote')
    return getQuote(block);
  else if (block.kind === 'image')
    return getImage(block);

  return null;
}

function getImage(block) {
  return <Image url={block.url} captionText={block.captionText}/>;
}

function getQuote(block) {
  return <Quote text={block.text} attribution={block.attribution}/>;
}

function getText(block) {
  return <Text text={block.text} intentions={block.intentions}/>;
}
