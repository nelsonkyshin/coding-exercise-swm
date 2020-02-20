import React from 'react';
import PropTypes from 'prop-types';
import Headline from './headline/Headline';
import Content from './content/Content';

export default function Article(props) {
  return (
    <div className='article'>
      <Headline title={props.article.headline} source={props.article.source} publicationDate={props.article.publicationDate} />
      <Content blocks={props.article.blocks} />
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.object
}
