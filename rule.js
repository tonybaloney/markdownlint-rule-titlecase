// @ts-check

"use strict";

const { addError, forEachHeading } = require("markdownlint-rule-helpers");
const { titleCase } = require("title-case");

module.exports = {
  "names": [ "titlecase-rule" ],
  "description": "Titlecase rule",
  "tags": [ "titlecase" ],
  "function": function rule(params, onError) {
    forEachHeading(params, (heading) => {
        const { line, lineNumber } = heading;
        const titled = titleCase(line);
        if (titled != line) {
          const column = 1;
          const length = 1;
          addError(
            onError,
            lineNumber,
            `Title Case: 'Expected ${titled}, found ${line}'`,
            null,
            [ column, length ],
            {
              "editColumn": column,
              "deleteCount": length
            }
          );
        }
      });
  }
};