import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
        s: '(min-width: 0px)',
        l: '(min-width: 1000px)',
    },
});

type MediaMap = {
    '@s': 's',
    '@l': 'l',
}
export const mediaMap: MediaMap = {
    '@s': 's',
    '@l': 'l',
};