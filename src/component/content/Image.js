import React from 'react';

export default class Image extends React.Component {
  render() {
    return (
      <div className='image'>
        <img src={this.props.url} alt={this.props.captionText}></img>
        <div className='caption'>{this.props.captionText}</div>
      </div>
    );
  }
}
