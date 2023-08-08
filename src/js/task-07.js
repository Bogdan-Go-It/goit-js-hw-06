const inputAp = document.querySelector("#font-size-control");
const textAp = document.querySelector("#text");
textAp.style.fontSize = `56px`;
inputAp.addEventListener("input", fn);

function fn(e) {
  textAp.style.fontSize = `${e.target.value}px`;
}
