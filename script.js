// ---------------------------------------- DOM elements ----------------------------------------
const elInputBox = document.querySelector("#inputBox");
const elConvertUpperBtn = document.querySelector("#convertUpperBtn");
const elConvertLowerBtn = document.querySelector("#convertLowerBtn");
const elTextList = document.querySelector("#textList");
const elWarningMsg = document.querySelector("#warningMsg");

// ---------------------------------------- Listeners ----------------------------------------
elConvertUpperBtn.addEventListener("click", doUpper); 

// ---------------------------------------- The main function ----------------------------------------
function doUpper(){
    const inputText = elInputBox.value; // Creates a variable from the text in the html input, to be used later in the function.

    // -------------------- Warning message if empty input box --------------------
    if (inputText.trim() === "") { 
        elWarningMsg.textContent = "The input is empty!";
        return;
    }
    elWarningMsg.textContent = ""; // Clears the warning message if text is added. 

    // -------------------- Creation of converted text --------------------
    const newItem = document.createElement("li"); // Creates a variable with the job of creating text list items (in memory).
    elTextList.appendChild(newItem); // adds the created empty <li> inside of the empty html <ul> tag.
    newItem.textContent = inputText.toUpperCase(); // converts the text to uppercase and adds it to the list items.
    newItem.setAttribute("class", "convertedText");

    // -------------------- Creates a delete button for the text list items --------------------
    const newDeleteBtn = document.createElement("button"); // creates a variable with the job of creating a button element (in memory).
    newDeleteBtn.textContent = "🗑️"; // sets a trash can icon for the button (from windows emojis).
    newDeleteBtn.setAttribute("class", "deleteBtn"); // adds a class to the del button so you can style it in the CSS file.
    newItem.appendChild(newDeleteBtn); // adds the created delete button inside text list items.

    newDeleteBtn.addEventListener("click", function () { // listens for clicks on the delete button.
        newItem.remove(); // removes the <li> from the converted text list.        
    });
}



// export the functions in this file to be used in the jestTest.spec.js file
module.exports = doUpper;