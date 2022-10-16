import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles";

const StyledSpace = styled('span', {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  height: 32,
});


export default function Space(props) {

  const { } = props;

  return (<StyledSpace />);

}

Space.propTypes = {

};

Space.defaultProps = {

};