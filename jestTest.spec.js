const convertText = require("./script.js");

test("converter test", () => {
    expect(convertText("hej")).toBe("HEJ");    
});