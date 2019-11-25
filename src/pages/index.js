import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Paragraphs.
import { getParagraph } from "../components/paragraphs/paragraphHelpers";

// styles.
import '../styles/styles.scss';

const IndexPage = ({data}) => {
  const paragraphs = data.nodePage.relationships.field_content_segments.map(getParagraph);

  return (
    <Layout>
      <SEO title="Home" />
      <div className="content-segments">
        {paragraphs}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query homePage {
    nodePage(drupal_internal__nid: {eq: 2}) {
      title
      relationships {
        field_content_segments {
          type: __typename
          ...ParagraphIntroduction
          ...ParagraphRTE
          ...ParagraphTwoColumnContent
        }
      }
    }
  }
`

export default IndexPage


