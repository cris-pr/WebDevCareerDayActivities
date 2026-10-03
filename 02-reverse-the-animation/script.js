// ----------------------------------------------------------------
// ACTIVITY 2 · Reverse the Animation
// This activity is all CSS — no JavaScript needed to solve it!
// The code below is just a fun BONUS: click the stage to paint
// the ball a random color.
// ----------------------------------------------------------------

const ball = document.querySelector(".ball");
const stage = document.querySelector(".stage");

// A tiny list of fun colors.
const colors = ["#f472b6", "#34d399", "#60a5fa", "#fbbf24", "#a78bfa", "#f87171"];

stage.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * colors.length);
  ball.style.background = colors[randomIndex];
});