import type { SpecificString, SmallerString } from "./bigstrings";

const thing = {} as any as Record<SpecificString, string>;
const isSpecificString = (key: string): key is SpecificString => {
	return key in thing;
};

const fallback = function (
	base: SpecificString | SmallerString,
): SpecificString {

	if (isSpecificString(base as any)) {
		return base as SpecificString;
	}

  return base as any;
};