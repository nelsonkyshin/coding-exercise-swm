import React from 'react';

export default class ArticleSource extends React.Component {
  render() {
    return (
      <span className='articleSource'>Source: {this.props.source}</span>
    );
  }
}
