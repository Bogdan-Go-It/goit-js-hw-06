const categoriesUl = document.querySelectorAll("ul#categories .item");
console.log(`Number of categories: ${categoriesUl.length}`);

const categoriesLi = document.querySelectorAll("ul#categories .item ul");
categoriesLi.forEach((el) => {
  console.log(`Category: ${el.previousElementSibling.textContent}`);
  console.log(`Elements: ${el.children.length}`);
});
