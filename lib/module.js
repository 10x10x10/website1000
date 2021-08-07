import { linkQuery } from "../data.js";

const queryLink = function (link) {
    let linkBlocks = link.split(".");
    let pointer = linkQuery;
    for (let i = 0; i < linkBlocks.length; i++) {
        pointer = pointer[linkBlocks[i]];
    }
    return pointer;
};

export { queryLink };