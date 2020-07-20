let addToy = false;

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

  const addToys = document.querySelector(".add-toy-form");

  addToys.addEventListener("submit", () => {
    // hide & seek with the form
    let name = document.querySelector('input[name="name"]').value ;
    let image = document.querySelector('input[name="image"]').value ;
        data(name , image );
  });


    fetch('http://localhost:3000/toys')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      displayToys(json);
    });


    function displayToys(toys){
       
      let divC = document.getElementById("toy-collection");

      for(let i = 0 ; i < toys.length; i++){
        let div = document.createElement("div");
        div.classList.add("card");
        let h2 = document.createElement("h2");
        h2.textContent = `${toys[i].name}`;
        div.append(h2);
        let img = document.createElement("img");
        img.src =`${toys[i].image}`;
        img.classList.add("toy-avatar"); ;
        div.append(img);
        let p = document.createElement("p");
        p.innerHTML =`${toys[i].likes} likes`;
        div.append(p);
        let button = document.createElement("button");
        button.classList.add("like-btn");
        button.innerHTML =`choose`;
        div.append(button);
        divC.append(div);
      }

      

    }

    function data(name,url)
      {

        let divC = document.getElementById("toy-collection");
        let div = document.createElement("div");
        div.classList.add("card");
        let h2 = document.createElement("h2");
        h2.textContent = `${name}`;
        div.append(h2);
        let img = document.createElement("img");
        img.src =`${url}`;
        img.classList.add("toy-avatar"); ;
        div.append(img);
        let p = document.createElement("p");
        p.innerHTML =`0 likes`;
        div.append(p);
        let button = document.createElement("button");
        button.classList.add("like-btn");
        button.innerHTML =`choose`;
        div.append(button);
        divC.append(div);
     
        let formData = {
          name: name,
          image: url,
          likes:0
        };
         
        let configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(formData)
        };
         
        fetch("http://localhost:3000/toys", configObj)
          .then(function(response) {
            return response.json();
          })
          .then(function(object) {
            console.log(object);
          }); 

      }






});
