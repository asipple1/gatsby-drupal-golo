/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const articles = await graphql(` 
    {
      allNodeArticle(sort: {fields: created, order: DESC}) {
        edges {
          node {
            id
            title
            path {
              alias
            }
          }
          next {
            title
            path {
              alias
            }
          }
          previous {
            id
            title
            path {
              alias
            }
          }
        }
      }
    }
  `);

  articles.data.allNodeArticle.edges.map(articleData => {
    const data = articleData.node;
    const prev = articleData.previous;
    const next = articleData.next;
    createPage({
      path: `/articles${data.path.alias}`,
      component: path.resolve('src/templates/article.js'),
      context: {
        ArticleId: data.id,
        prev,
        next
      },
    })
  });

  // Spacex
  const rocketLaunches = await graphql(` 
    {
      allSpacexLaunches {
        nodes {
          id
          flight_number
          mission_name
        }
      }
    }
  `);
  rocketLaunches.data.allSpacexLaunches.nodes.filter((rocket) => {
    return !!rocket.mission_name
  }).map(rocket =>
    createPage({
      path: `/rockets/${rocket.flight_number}`,
      component: path.resolve('src/templates/rocket.js'),
      context: {
        RocketId: rocket.flight_number,
      },
    })
  );
}