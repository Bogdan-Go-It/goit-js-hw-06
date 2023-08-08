// const textInput = document.querySelector("input#validation-input");
// let textLength = textInput.dataset;
// // textInput.addEventListener("blur", () => {
// //     if (data - length)

// // });
// console.log(textLength);

let inputElem = document.querySelector("#validation-input");
let inputLength = inputElem.dataset.length;
const input = document.querySelector("input");
inputElem.addEventListener("change", (e) => {
  const text = e.target.value;

  if (text.length === +inputLength) {
    inputElem.classList.add("valid");
    inputElem.classList.remove("invalid");
  } else {
    inputElem.classList.remove("valid");
    inputElem.classList.add("invalid");
  }
});
