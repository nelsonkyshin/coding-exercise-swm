import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleSource(props) {
  return (
    <span className='article-source'>Source: {props.source}</span>
  );
}

ArticleSource.propTypes = {
  source: PropTypes.string
}
