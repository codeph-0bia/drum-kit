let drumArray = document.querySelectorAll(".drum");

for (const e of drumArray) {
    e.addEventListener("click", function() {
        let buttonPressed = this.innerHTML;
        makeSound(buttonPressed);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
})

function makeSound(key) {
    let drumSounds = {
        "w": new Audio("sounds/crash.mp3"),
        "a": new Audio("sounds/kick-bass.mp3"),
        "s": new Audio("sounds/snare.mp3"),
        "d": new Audio("sounds/tom-1.mp3"),
        "j": new Audio("sounds/tom-2.mp3"),
        "k": new Audio("sounds/tom-3.mp3"),
        "l": new Audio("sounds/tom-4.mp3")
    }

    switch (key) {
        case "w":
        case "a":
        case "s":
        case "d":
        case "j":
        case "k":
        case "l":
            drumSounds[key].play();
            break;
    }
}