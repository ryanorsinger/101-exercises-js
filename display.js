// creates and appends a list item to the page's section to show number correct.
function addToDoneList(message) {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(message);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.querySelector(".correct ul").appendChild(node); 
}
