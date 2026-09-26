// ---------------------------------------- DOM elements ----------------------------------------
const elInputBox = document.querySelector("#inputBox");
const elConvertUpperBtn = document.querySelector("#convertUpperBtn");
const elConvertLowerBtn = document.querySelector("#convertLowerBtn");
const elTextList = document.querySelector("#textList");
const elWarningMsg = document.querySelector("#warningMsg");

// ---------------------------------------- Listeners ----------------------------------------
elConvertUpperBtn.addEventListener("click", doUpper); 
elConvertLowerBtn.addEventListener("click", doLower);

// ---------------------------------------- For Upper ----------------------------------------
function doUpper(){
    const inputText = elInputBox.value; // Creates a variable from the text in the html input, to be used later in the function.

    // -------------------- Warning message if empty input box --------------------
    if (inputText.trim() === "") { 
        elWarningMsg.textContent = "The input is empty!";
        return;
    }
    elWarningMsg.textContent = ""; // Clears the warning message if text is added. 

    const upperResult = convertToUpper(inputText); // calls on the function "convertToUpper", which in turn converts the text and console.logs it.
    elInputBox.value = upperResult; // converts the text in the input.

    // -------------------- Creation of converted text. If you don't create a span element then the copy button will copy the entire li --------------------
    const newItem = document.createElement("li"); // Creates a variable with the job of creating text list items (in memory).
    elTextList.appendChild(newItem); // adds the created empty <li> inside of the empty html <ul> tag.

    const newTextSpan = document.createElement("span"); // creates a variable with the job of creating span elements (in memory).
    newTextSpan.textContent = upperResult; // reuse the upperResult value created from "convertToUpper" function for the span elements.
    newItem.appendChild(newTextSpan); // adds the span elements to the <li>.
    newItem.setAttribute("class", "convertedText");

    // -------------------- Creation of a delete button for the text list items --------------------
    const newDeleteBtn = document.createElement("button"); // creates a variable with the job of creating a button element (in memory).
    newDeleteBtn.textContent = "🗑️"; // sets a trash can icon for the button (from windows emojis).
    newDeleteBtn.setAttribute("class", "deleteBtn"); // adds a class to the del button so you can style it in the CSS file.
    newItem.appendChild(newDeleteBtn); // adds the created delete button inside text list items.

    newDeleteBtn.addEventListener("click", function () { // listens for clicks on the delete button.
        newItem.remove(); // removes the <li> from the converted text list.        
    });

    // -------------------- Creation of a copy button for the text list items --------------------
    const newCopyBtn = document.createElement("button"); 
    newCopyBtn.textContent = "\u{29C9}"; 
    newCopyBtn.setAttribute("class", "copyBtn"); 
    newItem.appendChild(newCopyBtn); 

    newCopyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(newTextSpan.textContent);
    });
}

// ---------------------------------------- For Lower ----------------------------------------
function doUpper(){
    const inputText = elInputBox.value; 

    // -------------------- Warning message if empty input box --------------------
    if (inputText.trim() === "") { 
        elWarningMsg.textContent = "The input is empty!";
        return;
    }
    elWarningMsg.textContent = ""; 

    const lowerResult = convertToLower(inputText); // calls on the function "convertToLower", which in turn converts the text and console.logs it.
    elInputBox.value = lowerResult; // converts the text in the input.

    // -------------------- Creation of converted text --------------------
    const newItem = document.createElement("li");
    elTextList.appendChild(newItem); 

    const newTextSpan = document.createElement("span"); 
    newTextSpan.textContent = lowerResult; // reuse the lowerResult value created from "convertToLower" function for the span elements.
    newItem.appendChild(newTextSpan); 
    newItem.setAttribute("class", "convertedText");

    // -------------------- Creation of a delete button for the text list items --------------------
    const newDeleteBtn = document.createElement("button"); 
    newDeleteBtn.textContent = "🗑️"; 
    newDeleteBtn.setAttribute("class", "deleteBtn"); 
    newItem.appendChild(newDeleteBtn); 

    newDeleteBtn.addEventListener("click", function () {
        newItem.remove();     
    });

    // -------------------- Creation of a copy button for the text list items --------------------
    const newCopyBtn = document.createElement("button"); 
    newCopyBtn.textContent = "\u{29C9}"; 
    newCopyBtn.setAttribute("class", "copyBtn"); 
    newItem.appendChild(newCopyBtn); 

    newCopyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(newTextSpan.textContent);
    });
}

// ---------------------------------------- For Jest test ----------------------------------------
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

// export the functions in this file to be used in the jestTest.spec.js file
module.exports = {convertToUpper, convertToLower};