import React from "react";
import PropTypes from "prop-types";

import { styled, css, mediaMap } from "../../../styles/stitchesStyles.ts";

const StyledSection = styled('section', {
  boxSizing: 'border-box',
  variants: {
    size: {
      s: {
        margin: '40px 0',
        padding: 0,
      },
      l: {
        margin: '80px 0',
        padding: 0,
      },
    }
  }
});


type SectionProps = {
  children: React.ReactNode,
}

export default function Section(props: SectionProps) {

  const {
    children,
  } = props;

  return (<StyledSection size={mediaMap}>
    {children}
  </StyledSection>)

}

Section.propTypes = {

};

Section.defaultProps = {

};