// Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist.

main.remove();

// has a 'newHeader' variable that points to an <h1> node.

const newHeader = document.createElement("h1");

// The 'newHeader' variable that points to the <h1> node has an id of 'victory'.

newHeader.id = 'victory';

// The 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it.

newHeader.innerHTML = "Chris is the champion"
