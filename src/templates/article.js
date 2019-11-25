import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const Aricle = ({data}) => {
  const post = data.nodeArticle;

  return (
    <Layout>
      <SEO title={post.title} />
      <div className="container">
        <h1>{ post.title }</h1>

    { post.relationships.field_image.localFile.childImageSharp && <Img fluid={post.relationships.field_image.localFile.childImageSharp.fluid} alt={ post.field_image.alt }></Img> }
        <div dangerouslySetInnerHTML={{ __html: post.body.processed }} />
      </div>
    </Layout>
  );
};

Aricle.prototypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($ArticleId: String!) {
    nodeArticle(id: { eq: $ArticleId }) {
      id
      title
      body {
        processed
      }
      field_image {
        alt
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default Aricle;