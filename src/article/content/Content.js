import React from 'react';
import Block from './Block';

export default class Content extends React.Component {
  render() {
    return (
      <div className='content'>{this.props.blocks.map( (block, index) => <Block block={block} key={index}/> )}</div>
    );
  }
}
