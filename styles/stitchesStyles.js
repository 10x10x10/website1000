import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
        s: '(min-width: 0px)',
        l: '(min-width: 1000px)',
    },
});

export const mediaMap = {
    '@s': 's',
    '@l': 'l',
};