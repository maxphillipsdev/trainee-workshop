// Document Object
// console.log(document);

// Creating an element
const newDiv = document.createElement("div");
const newP = document.createElement("p");
newP.innerText = "Hello";
newDiv.appendChild(newP);
document.body.appendChild(newDiv);

// Deleting an element
// newP.remove();

// Grab element
const h1 = document.querySelector("h1");
// console.log(h1);
// h1.remove();

// Mutating an element
// h1.style.backgroundColor = "red";
// h1.style.height = "100px";
// h1.innerText = "red sus";

// susys is a sus

const sussyButton = document.querySelector("button");

sussyButton.addEventListener("click", () => {
  h1.classList.add("sus-title");
  console.log("sus");
  window.alert("sus");
});
