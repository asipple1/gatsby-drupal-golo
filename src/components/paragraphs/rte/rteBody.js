// introduction.js
import React from "react";
import { graphql } from "gatsby";

import './rteBody.scss';

export const RteParagraph = ({ node }) => (
    <div className="container rte-body-component">
      <div dangerouslySetInnerHTML ={{__html: node.field_body.processed}} />
    </div>
);

export const fragment = graphql`
    fragment ParagraphRTE on paragraph__rte_body{
        id
        drupal_internal__id
        field_body {
          processed
        }
    }
`;