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

    // -------------------- Creation of converted text. If you don't create a span element then the copy button will copy the entire li --------------------
    const newItem = document.createElement("li"); // Creates a variable with the job of creating text list items (in memory).
    elTextList.appendChild(newItem); // adds the created empty <li> inside of the empty html <ul> tag.

    const newTextSpan = document.createElement("span"); // creates a variable with the job of creating span elements (in memory).
    newTextSpan.textContent = inputText.toUpperCase(); // converts the span text to uppercase.
    elInputBox.value = elInputBox.value.toUpperCase(); // converts the text in the input to uppercase.
    newItem.appendChild(newTextSpan); // adds the span elements to the <li>.
    newItem.setAttribute("class", "convertedText");
    console.log(inputText.toUpperCase()); // print the result to console log (can see the result in the console section of dev tools after you convert).

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

// ---------------------------------------- For lower ----------------------------------------
function doLower(){
    const inputText = elInputBox.value; 

    // -------------------- Warning message if empty input box --------------------
    if (inputText.trim() === "") { 
        elWarningMsg.textContent = "The input is empty!";
        return;
    }
    elWarningMsg.textContent = ""; 

    // -------------------- Creation of converted text. If you don't create a span element then the copy button will copy the entire li --------------------
    const newItem = document.createElement("li");
    elTextList.appendChild(newItem); 

    const newTextSpan = document.createElement("span");
    newTextSpan.textContent = inputText.toLowerCase(); // converts the span text to lowercase.
    elInputBox.value = elInputBox.value.toLowerCase(); // converts the text in the input to lowercase.
    newItem.appendChild(newTextSpan);
    newItem.setAttribute("class", "convertedText");
    console.log(inputText.toLowerCase()); // print the result to console log (can see the result in the console section of dev tools after you convert).

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

// export the functions in this file to be used in the jestTest.spec.js file
module.exports = {doUpper, doLower};