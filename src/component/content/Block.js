import React from 'react';
import Image from './Image';
import Quote from './Quote';
import Text from './Text';

export default class Block extends React.Component {
  render() {
    return (
      <div className='block'>{getBlock(this.props.block)}</div>
    );
  }
}

function getBlock(block) {
  if (block.kind === 'text')
    return getText(block);
  else if (block.kind === 'pull-quote')
    return getQuote(block);
  else if (block.kind === 'image')
    return getImage(block);

  return '';
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
