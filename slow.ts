import type { SpecificString } from "./bigstrings";

const isSpecificString = (key: any): key is SpecificString => {
  return true;
};

function test(base: SpecificString) {
  if (isSpecificString(base)) {
    return base;
  }
}
