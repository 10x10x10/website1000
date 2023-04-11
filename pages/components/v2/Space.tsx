import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles.ts";

const StyledSpace = styled('span', {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  height: 32,
});

type SpaceProps = {
};

export default function Space(props: SpaceProps) {

  const { } = props;

  return (<StyledSpace />);

}

Space.propTypes = {

};

Space.defaultProps = {

};