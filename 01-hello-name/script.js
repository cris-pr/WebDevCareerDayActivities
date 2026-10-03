// ----------------------------------------------------------------
// ACTIVITY 1 · "Hello, _____!"
// JavaScript makes the page DO something when you click the button.
// ----------------------------------------------------------------

// 1. Grab the things on the page we want to use.
const button = document.getElementById("greet-button");
const input = document.getElementById("name-input");
const greeting = document.getElementById("greeting");
const placeholder = document.getElementById("name-placeholder");

// 2. When the button is clicked, run the code inside { }.
button.addEventListener("click", function () {
  // Get whatever the student typed.
  let name = input.value;

  // If nothing was typed, be friendly anyway.
  if (name.trim() === "") {
    name = "friend";
  }

  // 3. Show the greeting on the screen.
  greeting.textContent = "Nice to meet you, " + name + "!";
  placeholder.textContent = name;
});

// CHALLENGE IDEAS:
//   • Change the greeting message to your own words.
//   • Add an emoji to the greeting.
//   • Make the greeting use ALL CAPS. (Hint: name.toUpperCase())