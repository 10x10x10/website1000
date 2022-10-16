import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles";


export const TextStyle = css({
  fontSize: 18,
  padding: 0,
  margin: 0,
  marginBottom: 8,
  lineHeight: '26px',
  color: '#ffffffbf',
  wordWrap: 'break-word',
  whiteSpace: 'pre-line',
});

const P = styled('p', TextStyle, {
});



export default function Text(props) {

  const {
    content,
  } = props;

  if (Array.isArray(content)) {
    return content.map((c, i) => <P key={i}>{c}</P>);
  }

  return (<P>{content}</P>)

}

Text.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Text.defaultProps = {
  content: '',
};