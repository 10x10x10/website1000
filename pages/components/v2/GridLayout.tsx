import React from "react";
import PropTypes from "prop-types";

import { styled, css, mediaMap, } from "../../../styles/stitchesStyles.ts";

const StyledGridLayout = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  
  rowGap: 10,
  columnGap: 40,

});


type GridLayoutProps = {
  sCol: number,
  lCol: number,
  children: React.ReactNode,
}


/**
 * @param {number} sCol - 
 * @param {number} lCol - 
 */
export default function GridLayout(props: GridLayoutProps) {

  const {
    children,
    sCol,
    lCol,
  } = props;


  return (<StyledGridLayout
    css={{
      '@s': { gridTemplateColumns: `repeat(${sCol}, 1fr)`, },
      '@l': { gridTemplateColumns: `repeat(${lCol}, 1fr)`, },
    }}
  >
    {children}
  </StyledGridLayout>)

}

GridLayout.propTypes = {
  sCol: PropTypes.number,
  lCol: PropTypes.number,
};

GridLayout.defaultProps = {
  sCol: 1,
  lCol: 1,
};