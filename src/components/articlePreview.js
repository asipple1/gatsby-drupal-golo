import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ArticlePrview = ({title, path, image, alt, summary }) => {
  return (
    <div className="gird-item">
      <Link to={`/articles${path}`}>
        <h2>{title}</h2>
      </Link>
      { image && <Img fluid={image} alt={alt} /> }
      <div dangerouslySetInnerHTML ={{__html: summary}} />
    </div>
  )
}

ArticlePrview.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
};

export default ArticlePrview;