import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles";


export const TextStyle = css({
  padding: 0,
  margin: 0,
  marginBottom: 8,
  lineHeight: '26px',
  wordWrap: 'break-word',
  whiteSpace: 'pre-line',
  variants: {
    type: {
      small: {
        fontSize: 14,
        color: '#ffffff80',
      },
      normal: {
        fontSize: 16,
        color: '#ffffffc0',
      },
      big: {
        fontSize: 28,
        fontWeight: 600,
        color: '#ffffffe0',
      }
    }
  }
});

const P = styled('p', TextStyle, {
});



/**
 * @param {!string} type - `'normal'` | `'small'` | `'big'`
 * @param {!string|string[]} content - 
 */
export default function Text(props) {

  const {
    content,
    type,
  } = props;

  if (Array.isArray(content)) {
    return content.map((c, i) => <P key={i} type={type}>{c}</P>);
  }

  return (<P type={type}>{content}</P>)

}

Text.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.oneOf(['normal', 'small', 'big']),
};

Text.defaultProps = {
  content: '',
  type: 'normal',
};