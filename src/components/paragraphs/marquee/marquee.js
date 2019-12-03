// introduction.js
import React from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';


export const MarqueeParagraph = ({ node }) => {
  const slides = node.relationships.field_marquee_slide;
  return (
    <div className="marquee">
      <div className="marquee__wrapper">
      {slides.map((slide, index) => {
        return  (
          <div className={`marquee__slide marquee__slide--${slide.field_marquee_content_position ? slide.field_marquee_content_position : 'left' }`} key={index}>
            <h1>{slide.field_marquee_headline ? slide.field_marquee_headline : node.fall_back_headline}</h1>
            <Img fluid={slide.relationships.field_marquee_image.localFile.childImageSharp.fluid} alt={slide.field_marquee_headline} />
          </div>
        )
      })}
      </div>
    </div>
  );
}

export const fragment = graphql`
  fragment ParagraphMarquee on paragraph__marquee_carousel{
      id
      drupal_internal__id
      relationships {
        field_marquee_slide {
          field_marquee_headline
          field_marquee_content_position
          relationships {
            field_marquee_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
  }
`;