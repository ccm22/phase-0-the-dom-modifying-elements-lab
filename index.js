// Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist.

main.remove();

// has a 'newHeader' variable that points to an <h1> node.
// The syntax to create an HTML element using JS is "const element-name = document.createElement('tag type')".
// Created an element in JS by calling  document.createElement('tagName'), where tagName is the name of any valid HTML tag ('p', 'div', 'span', etc.).

const newHeader = document.createElement("h1");

// The 'newHeader' variable that points to the <h1> node has an id of 'victory'.
// The syntax is element.id = 'id name', where the element is newHeader and the id name is victory.

newHeader.id = 'victory';

// The 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it.
// Add Elements to the DOM via innerHTML.
// The newHeader element is grabbed and its innerHTML attribute is set to "Chris is the champion".

newHeader.innerHTML = "Chris is the champion"
