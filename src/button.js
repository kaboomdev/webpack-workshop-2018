// take a str, the butotn label and return an element
/**
 * 
 * @param {string} buttonName 
 * @returns {element} Element
 */
const makeButton = (buttonName) => {
    const buttonLabel = `${buttonName}`;
    
    const button = document.createElement("button");
    button.innerText = buttonLabel;
     
    return button;
}

module.exports = makeButton;