//TODO: add event listeners for click to all buttons

let drumArray = document.querySelectorAll(".drum");

for (const d of drumArray) {
    d.addEventListener("click", function() {
        alert("clicked");
    });
}

//TODO: key specific event listeners