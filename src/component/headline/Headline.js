import React from 'react';
import PropTypes from 'prop-types';
import ArticleTitle from './ArticleTitle';
import ArticleSource from './ArticleSource';
import PublicationDate from './PublicationDate';

export default function Headline(props) {
  return (
    <div className='headline'>
      <ArticleTitle title={props.title} />
      <div className='headline-meta'>
        <ArticleSource source={props.source} />
        <PublicationDate publicationDate={props.publicationDate} />
      </div>
    </div>
  );
}

Headline.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  publicationDate: PropTypes.string
};
