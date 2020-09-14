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


let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.getElementById("toy-collection");
  const formAddToy=document.querySelector(".add-toy-form");

  formAddToy.addEventListener("submit",function(e){
    e.preventDefault();
    var name=document.querySelectorAll('[name=name]');
    var srcUrl=document.querySelectorAll('[name=image]');
    // console.log(name[0].value);
    configurationObject = {
      method: "POST",
      // method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
       
        name: name[0].value,
        image: srcUrl[0].value,
        likes: 0
      })
    };
    fetch(`http://localhost:3000/toys/`, configurationObject);


  });

