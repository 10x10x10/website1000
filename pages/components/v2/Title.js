import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles";

const H = css({
  padding: 0,
  margin: 0,
  marginBottom: 16,
});

const H1 = styled('h1', H, {
  fontSize: 36,
  fontWeight: 500,
});

const H2 = styled('h2', H, {
  fontSize: 28,
  fontWeight: 400,
});

const H3 = styled('h3', H, {
  fontSize: 22,
  fontWeight: 300,
});


export default function Title(props) {

  const {
    type,
    content,
  } = props;


  switch (type) {
    case 'h1': return <H1 className='convert-selection'>{content}</H1>;
    case 'h2': return <H2 className='convert-selection'>{content}</H2>;
    case 'h3': return <H3 className='convert-selection'>{content}</H3>;

    default: return null;
  }
}

Title.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3',]),
  content: PropTypes.string,
};

Title.defaultProps = {
  type: 'h1',
  content: '',
};