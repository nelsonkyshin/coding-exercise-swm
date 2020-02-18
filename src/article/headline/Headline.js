import React from 'react';
import ArticleTitle from './ArticleTitle';
import ArticleSource from './ArticleSource';
import PublicationDate from './PublicationDate';

export default class Headline extends React.Component {
  render() {
    return (
      <div className='headline'>
        <ArticleTitle title={this.props.title} />
        <div className='headline-meta'>
          <ArticleSource source={this.props.source} />
          <PublicationDate publicationDate={this.props.publicationDate} />
        </div>
      </div>
    );
  }
}
