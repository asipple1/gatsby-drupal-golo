// paragraphHelpers.js
import React from "react";
import { IntroductionParagraph } from "./introduction/introduction";
import { RteParagraph } from "./rte/rteBody";
import { TwoColumnContent } from "./twoColumnContent/twoColumnContent";
import { MarqueeParagraph } from "./marquee/marquee";

const components = {
  paragraph__marquee_carousel: MarqueeParagraph,
  paragraph__introduction: IntroductionParagraph,
  paragraph__rte_body: RteParagraph,
  paragraph__two_column_content: TwoColumnContent,
};

export const getParagraph = node => {
  if (components.hasOwnProperty(node.type)) {
    const ParagraphComponent = components[node.type];
    return (
      <div id={`content-segment-${node.drupal_internal__id}`} className={`content-segment content-segment--${node.type.replace('paragraph__','').replace(/_/g, '-')}`} key={node.id}>
        <ParagraphComponent key={node.id} node={node} />
      </div>
    );
  }
  return <p key={node.id}>Unknown type {node.__typename}</p>;
};