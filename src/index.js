let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection=document.getElementById("toy-collection");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // configurationObject = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   },
  //   body: JSON.stringify({
  //     dogName: "Byron",
  //     dogBreed: "Poodle"
  //   })
  // };

  // fetch("http://localhost:3000/dogs", configurationObject);

  function fetchToys(){
    fetch("http://localhost:3000/toys")
    .then(data =>data.json())
    .then(dt=>handleToysFetch(dt));
  }

  function handleToysFetch(data){
    // data.forEach(element => {
    //   console.log(element.name);
    // });
    // console.log(data.length);

    data.forEach(element => {
        // console.log(element);
        var card=document.createElement("div");
        card.classList.add("card");

        var toyName=document.createElement("h2");
        toyName.innerHTML=element.name;
       
        var image=document.createElement("img");
        image.src=element.image;
        image.classList.add("toy-avatar");

        var likes=document.createElement("p");
        likes.innerHTML=`Toys has <b><u>${element.likes}</u></b> likes.`;


       
        var btnLike=document.createElement("button");
        btnLike.classList.add("like-btn");
        btnLike.innerHTML="like";
        btnLike.addEventListener("click",function(){
          incrementLikes(element);
        });

        


        card.appendChild(toyName);
        card.appendChild(image);
        card.appendChild(likes);
        card.appendChild(btnLike);
        toyCollection.appendChild(card);
        

    });
    
  }
//   h2 tag with the toy's name
// img tag with the src of the toy's image attribute and the class name "toy-avatar"
// p tag with how many likes that toy has
// button tag with a class "like-btn"

function incrementLikes(elem){
   configurationObject = {
    // method: "POST",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      id: elem.id,
      name: elem.name,
      image: elem.image,
      likes: elem.likes+1
    })
  };

  fetch(`http://localhost:3000/toys/${elem.id}`, configurationObject);

}
  
  fetchToys();
  
});
