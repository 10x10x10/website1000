import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles";

const StyledCard = styled('div', {
  backgroundColor: '#88888820',
  borderRadius: 8,
  padding: 16,
});

export default function Card(props) {

  const {
    children,
  } = props;

  return (<StyledCard>
    {children}
  </StyledCard>)



}

Card.propTypes = {
};

Card.defaultProps = {
};