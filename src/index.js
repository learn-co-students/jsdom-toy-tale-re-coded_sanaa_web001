let addToy = false;
let toyCollectionDiv = document.getElementById('toy-collection');
let submitButton = document.getElementsByClassName('submit')[0];

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetch('http://localhost:3000/toys')
  .then(response => response.json())
  .then(data => {
    data.forEach(obj =>{
    let cardDiv = document.createElement("div")
    cardDiv.className = 'card';
    let h2 = document.createElement("h2");
    h2.innerHTML = obj.name;
    let img = document.createElement("img")
    img.src = obj.image;
    img.className = 'toy-avatar';
    let p = document.createElement("p");
    p.innerHTML = obj.likes + 'Likes';
    let button = document.createElement("button");
    button.className = 'like-btn';
    button.innerHTML = 'Like';
    cardDiv.appendChild(h2);
    cardDiv.appendChild(img);
    cardDiv.appendChild(p);
    cardDiv.appendChild(button);
    toyCollectionDiv.appendChild(cardDiv);
   })
  })
  submitButton.addEventListener("click", e =>{
    e.preventDefault(('http://localhost:3000/toys'),{
      method: POST,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
      body: JONS.stringify({
        //new toy
      })
    });
    fetch('')
  })
});
