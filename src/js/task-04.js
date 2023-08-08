const dec = document.querySelector("button[data-action='decrement']");
const inc = document.querySelector("button[data-action='increment']");
const value = document.querySelector("#value");
let coutterValue = 0;

function decrement(event) {
  coutterValue -= 1;
  value.textContent = coutterValue;
}
function increment(event) {
  coutterValue += 1;
  value.textContent = coutterValue;
}

dec.addEventListener("click", decrement);
inc.addEventListener("click", increment);
