import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticlePreview from '../components/articlePreview';

const Articles = ({data}) => {
  const articles = data.allNodeArticle.nodes;
  return (
    <Layout>
      <SEO title='All Articles' />
      <div className="container">
        {articles.map(article => (
          <ArticlePreview key={article.id} title={article.title} path={article.path.alias} image={article.relationships.field_image.localFile.childImageSharp ? article.relationships.field_image.localFile.childImageSharp.fluid : false} alt={article.field_image.alt} summary={article.body.summary ? article.body.summary.substring(0, 300) : article.body.processed.substring(0, 300)} />
        ))}
      </div>
    </Layout>
  );
}

Articles.prototypes = {
  data: PropTypes.object.isRequired,
};

export const data = graphql`
  {
    allNodeArticle(sort: {fields: created, order: DESC}) {
      nodes {
        id
        title
        body {
          summary
          processed
        }
        created
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
        path {
          alias
        }
      }
    }
  }
`;

export default Articles;