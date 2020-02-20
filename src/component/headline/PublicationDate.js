import React from 'react';
import PropTypes from 'prop-types';

export default function PublicationDate(props) {
  return (
    <span className='publicationDate'>published {new Date(props.publicationDate).toLocaleDateString()}</span>
  );
}

PublicationDate.propTypes = {
  publicationDate: PropTypes.string
};
