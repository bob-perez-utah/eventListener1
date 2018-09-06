var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//Set Click Listener
button.addEventListener("click", changeText);

//changeText() function
function changeText() {
    paragraph.textContent = "Someone Clicked The Button!";
}