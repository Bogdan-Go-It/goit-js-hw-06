const inputAp = document.querySelector("#font-size-control");
const textAp = document.querySelector("#text");
textAp.style.fontSize = `56px`;
inputAp.addEventListener("input", pixel);

function pixel(dis) {
  textAp.style.fontSize = `${dis.target.value}px`;
}
