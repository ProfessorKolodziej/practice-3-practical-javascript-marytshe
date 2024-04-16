const myName = "Mary";
const myAge = 100;

console.log(myAge);

//Practical JavaScript

const toggledParagraph = document.querySelector('.show');
console.log(toggledParagraph);

// function

function toggleParagraph() {
    toggledParagraph.classList.toggle("hide");
    toggledParagraph.classList.toggle("show");
    console.log("My toggle function");
    console.log(toggledParagraph);
}

//Find the paragraph and toggle the button when we click it
const toggleButton = document.querySelector('#toggle-control');

toggleButton.addEventListener('click', toggleParagraph);
