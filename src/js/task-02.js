const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const listItem = ingredients
  .map((im) => `<li class="${im}">${im}</li>`)
  .join("");
list.insertAdjacentHTML("afterbegin", listItem);
