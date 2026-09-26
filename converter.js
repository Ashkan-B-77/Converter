// ---------- Functions doing the conversion and logs, have to be here for the Jest test to work ----------------------------------------
function convertToUpper(text) {
    const result = text.toUpperCase();
    console.log(result);
    return result;
}

function convertToLower(text) {
    const result = text.toLowerCase();
    console.log(result);
    return result;
}

/* Export the functions in this file to be used in jestTest.spec.js, a simple module.exports would give an error in the dev tools console...
...but wrapping it like this means it only exports it when running under Node. */
if (typeof module !== "undefined" && module.exports) {
    module.exports = {convertToUpper, convertToLower};
}

