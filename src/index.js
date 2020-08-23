let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  
  fetchToys();
  // console.log(fetchedToys.json());
  // addToysToDom(fetchedToys);
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function fetchToys() {
  return fetch("http://localhost:3000/toys")
    .then((response) => response.json())
    .then((data) => {
      addToysToDom(data);
    });
}

function addToysToDom(fetchedToys,) {
  var toyCollection = document.querySelector("#toy-collection");
  fetchedToys.forEach((toy) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    const h2 = document.createElement("h2");
    h2.innerText = toy.name;;
    card.appendChild(h2);
    const image = document.createElement("img");
    image.setAttribute("src", toy.image)
    image.setAttribute("class",'toy-avatar');
    const p = document.createElement("p");
    p.innerText = toy.likes;
    card.appendChild(p);
    const button = document.createElement("button");
    button.setAttribute("class", "like-btn");
    card.appendChild(button);

    card.appendChild(image);
    
    toyCollection.appendChild(card);
  });
}
