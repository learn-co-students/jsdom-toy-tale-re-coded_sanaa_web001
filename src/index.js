// let addToy = false;
//
// document.addEventListener("DOMContentLoaded", () => {
//   const addBtn = document.querySelector("#new-toy-btn");
//   const toyFormContainer = document.querySelector(".container");
//   addBtn.addEventListener("click", () => {
//
//     addToy = !addToy;
//     if (addToy) {
//       toyFormContainer.style.display = "block";
//     } else {
//       toyFormContainer.style.display = "none";
//     }
//   });
// });

let collection = document.querySelector("#toy-collection");

fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((toy) => {
        //
    });
  });


  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: toy_data.name.value,
      image: toy_data.image.value,
      likes: 0,
    }),
  })
    .then((res) => res.json())
    .then((obj_toy) => {
        //
      collection.append(newToy);
    });
