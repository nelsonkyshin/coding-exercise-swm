import React from 'react';

export default class ArticleTitle extends React.Component {
  render() {
    return (
      <h1 className='articleTitle'>{this.props.title}</h1>
    );
  }
}
