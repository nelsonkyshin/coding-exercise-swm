import React from 'react';

export default class Quote extends React.Component {
  render() {
    return (
      <div className='quote'>
        <div className='text'>{this.props.text}</div>
        <div className='attribution'>{this.props.attribution}</div>
      </div>
    );
  }
}
