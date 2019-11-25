// introduction.js
import React from "react";
import { graphql } from "gatsby";

import './two-column-content.scss';

export const TwoColumnContent = ({ node }) => (

  <div className="two-column-component">
    <div className="container two-column-component__wrapper">
      <div className="two-column-component__wrapper__column">
        <h3>{node.field_headline_left_column}</h3>
        <div className="rte-body-component two-column-component__wrapper__column__copy" dangerouslySetInnerHTML ={{__html: node.field_description_left_column.processed}} />
      </div>
      <div className="two-column-component__wrapper__column">
        <h3>{node.field_headline_right_column}</h3>
        <div className="rte-body-component two-column-component__wrapper__column__copy" dangerouslySetInnerHTML ={{__html: node.field_description_right_column.processed}} />
      </div>
    </div>
  </div>
);

export const fragment = graphql`
    fragment ParagraphTwoColumnContent on paragraph__two_column_content{
      id
      drupal_internal__id
      field_headline_left_column
      field_description_left_column {
        processed
      }
      field_headline_right_column
      field_description_right_column {
        processed
      }
    }
`;