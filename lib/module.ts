import { linkQuery } from "../data.ts";

const queryLink = function (link: string) {
  let linkBlocks = link.split(".");
  let pointer: any = linkQuery;
  for (let i = 0; i < linkBlocks.length; i++) {
    pointer = pointer[linkBlocks[i]];
  }
  return pointer;
};

export { queryLink };