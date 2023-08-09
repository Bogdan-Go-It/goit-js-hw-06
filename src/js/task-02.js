const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const allList = [];
const addList = document.createElement("li");
const listItem = ingredients.map((im) => {
  addList.textContent = im;
  addList.classList.add("item");
  allList.push(addList.outerHTML);
});
list.insertAdjacentHTML("afterbegin", allList.join(""));
