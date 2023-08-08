const inpu = document.querySelector("input#name-input");
const spaan = document.querySelector("span#name-output");

inpu.addEventListener("input", (event) => {
  spaan.textContent = event.currentTarget.value;
  if (inpu.value === "") {
    spaan.textContent = "Anonymous";
  }
  console.log(inpu.value);
});
