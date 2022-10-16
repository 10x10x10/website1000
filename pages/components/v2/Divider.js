import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles";

const StyledDivider = styled('span', {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  height: 2,
  margin: '16px 0',
  backgroundColor: '#ffffff20',
});


export default function Divider(props) {

  const { } = props;

  return (<StyledDivider />);

}

Divider.propTypes = {

};

Divider.defaultProps = {

};