function removeArticle() {
  document.getElementById("change").innerText =
    "Congrats We just change text by using document.getElementById";
}

// ** use document.createElement() && appendChild()
document.body.onload = createArticle;

function createArticle() {
  // create a new div element
  const aDiv = document.createElement("h2");

  // and give it some content
  const newContent = document.createTextNode("hii this is p tag");

  // add the text node to the newly created div
  aDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("h2");
  document.body.insertBefore(aDiv, currentDiv); 
}
