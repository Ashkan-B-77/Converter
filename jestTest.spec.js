const doUpper = require("./script.js");


describe("My test suite", () => {
  test("converter test", () => {
    expect(doUpper("hej")).toBe("HEJ");
        
    });
});