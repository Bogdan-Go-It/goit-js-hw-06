const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");
// const listItem = document.createElement("li");
// const test = images.forEach(function (item, index) {
//   const imegItem = document.createElement("img");
//   imegItem.src = item.url;
//   imegItem.alt = item.alt;
//   listItem.appendChild(imegItem);

//   console.log(imegItem);
//   console.log(listItem);
// });
// list.insertAdjacentHTML("beforeend", listItem);
// console.log(imegItem);

const newImeg = images
  .map(
    (im) => `<li><img src = "${im.url}" alt = "${im.alt}" width = "200px"></li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", newImeg);
list.style.display = "flex";
list.style.flexDirection = "row";
list.style.gap = "20px";
console.log(newImeg);
