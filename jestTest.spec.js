 /* This line imports these functions from the converter.js file.
 - if you put this file in the __tests__ folder then this needs to be ../ instead of./ so it looks for the file one directory level up. 
 - JEST looks for test files in __tests__ folder no matter of their name. */
const {convertToUpper, convertToLower} = require("./converter.js");



describe("First test", () => {
  test("convert to Uppercase", () => {
    expect(convertToUpper("hej")).toBe("HEJ");
        
    });
});

describe("Second test", () => {
  test("convert to lowercase", () => {
    expect(convertToLower("HALLÅ")).toBe("hallå");
        
    });
});