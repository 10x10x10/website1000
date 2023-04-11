import React from "react";
import PropTypes from "prop-types";

import { styled, css, } from "../../../styles/stitchesStyles.ts";
import { TextStyle, } from "./Text.tsx";

const ListStyle = css({
  paddingLeft: 24,
});

const UL = styled('ul', ListStyle, {

});

const OL = styled('ol', ListStyle, {

});


const LI = styled('li', TextStyle, {
});




type ListProps = {
  type: 'order' | 'unorder',
  content: string[],
}


/**
 * @param {!string} type - `'order'` | `'unorder'`
 * @param {!string} content - 
 */
export default function List(props: ListProps) {

  const {
    type,
    content,
  } = props;


  const Wrapper = type === 'order' ? OL : UL;


  return (<Wrapper>
    {content.map((el, i) => (<LI key={i} type={'normal'}>{el}</LI>))}
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