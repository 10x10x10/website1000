import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles";
import { TextStyle, } from "./Text";

const ListStyle = css({
  paddingLeft: 24,
});

const UL = styled('ul', ListStyle, {

});

const OL = styled('ol', ListStyle, {

});


const LI = styled('li', TextStyle, {
});



export default function List(props) {

  const {
    type,
    content,
  } = props;


  const Wrapper = type === 'order' ? OL : UL;


  return (<Wrapper>
    {content.map((el, i) => (<LI key={i}>{el}</LI>))}
  </Wrapper>)





}

List.propTypes = {
  type: PropTypes.oneOf(['order', 'unorder',]),
  content: PropTypes.array,
};

List.defaultProps = {
  type: 'order',
  content: [],
};