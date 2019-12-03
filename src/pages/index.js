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
  const marquee = data.nodePage.relationships.field_marquee_carousel ? getParagraph(data.nodePage.relationships.field_marquee_carousel) : false;

  return (
    <Layout>
      <SEO title="Home" />
      {marquee}
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
        field_marquee_carousel {
          type: __typename
          ...ParagraphMarquee
        }
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


