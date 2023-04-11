import React, { useState, } from "react";
import PropTypes from "prop-types";

import { styled, } from "../../../styles/stitchesStyles.ts";
import { TextStyle, } from "./Text.tsx";


const StyledCredits = styled('div', {
    display: 'flex',
    flexDirection: 'column',
});

const FoldContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    position: 'relative',
    overflow: 'hidden',

    transition: 'max-height 0.5s',

    variants: {
        fold: {
            true: {
                maxHeight: 200,
                cursor: 'pointer',

                '&::after': {
                    content: '',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 150,
                    // background: '#0B0C0E',
                    background: 'linear-gradient(0deg, #0B0C0EFF 0%, #0B0C0E00 100%)',
                },
            },
            false: {
                maxHeight: 1000,
                cursor: 'pointer',
                '&::after': {
                    display: 'none',
                },
            }
        }
    },

})

const CreditItem = styled(TextStyle);


const MoreButton = styled('button', {

    fontSize: 16,
    cursor: 'pointer',
    width: 80,
    padding: 8,
    textAlign: 'center',
    border: '1px #ffffff solid',
    backgroundColor: '#ffffff00',
    color: '#ffffff',
    boxSizing: 'border-box',
    marginTop: 16,

    '&:hover': {
        backgroundColor: '#ffffff',
        color: '#000000',
    }
})


type CreditsProps = {
    content: string[],
    foldable: boolean,
};


/**
 * @param {string[]} content -
 */
export default function Credits(props: CreditsProps) {

    const {
        content,
        foldable,
    } = props;

    const [fold, setFold] = useState(false);

    return (<StyledCredits>
        <FoldContainer fold={foldable ? fold : false} onClick={() => setFold(!fold)}>
            {content.map((el, i) => (<CreditItem key={i} type={'normal'}>{el}</CreditItem>))}
        </FoldContainer>
        {foldable && <MoreButton onClick={() => setFold(false)}>More</MoreButton>}
    </StyledCredits>)

}

Credits.propTypes = {
    content: PropTypes.array,
    foldable: PropTypes.bool,
};

Credits.defaultProps = {
    content: [],
    foldable: false,
};