// introduction.js
import React from "react";
import { graphql } from "gatsby";

// Styles.
import './introduction.scss';

export const IntroductionParagraph = ({ node }) => (
    <div className="introduction">
      <div className="container introduction__wrapper">
        <h2>{node.field_introduction_headline}</h2>
        <div className="introduction__wrapper__copy" dangerouslySetInnerHTML ={{__html: node.field_introduction_description.processed}} />
      </div>
    </div>
);

export const fragment = graphql`
    fragment ParagraphIntroduction on paragraph__introduction {
        id
        drupal_internal__id
        field_introduction_headline
        field_introduction_description {
          processed
        }
    }
`;