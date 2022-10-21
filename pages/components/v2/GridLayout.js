import React from "react";
import PropTypes from "prop-types";

import { styled, css, mediaMap, } from "../../../styles/stitchesStyles";

const StyledGridLayout = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  
  rowGap: 10,
  columnGap: 40,

});


export default function GridLayout(props) {

  const {
    children,
    sCol,
    mCol,
  } = props;


  return (<StyledGridLayout
    css={{
      '@s': { gridTemplateColumns: `repeat(${sCol}, 1fr)`, },
      '@l': { gridTemplateColumns: `repeat(${mCol}, 1fr)`, },
    }}
  >
    {children}
  </StyledGridLayout>)

}

GridLayout.propTypes = {
  sCol: PropTypes.number,
  mCol: PropTypes.number,
};

GridLayout.defaultProps = {
  sCol: 1,
  mCol: 1,
};