import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleTitle(props) {
  return (
    <h1 className='article-title'>{props.title}</h1>
  );
}

ArticleTitle.propTypes = {
  title: PropTypes.string
}
