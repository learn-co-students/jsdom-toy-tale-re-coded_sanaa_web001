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
  fetch('http://localhost:3000/toys').then(res=>res.json()).then((data)=>{
    data.forEach((toy)=>{
      let card=document.creatElement("div");
      card.setAttribute("class","card");
      let h2=document.creatElement("div");
      h2.innerHTML=toy.name;
      let img=document.creatElement("img");
      img.setAttribute("src",toy.toy-avatar);
      let p=document.creatElement("p");
      p.innerHTML=toy.likes;
      let button=document.creatElement("button");
      button.setAttribute("class","like-btn");
      card.appendChild(h2);
      card.appendChild(img);
      card.appendChild(p);
      card.appendChild(button);
      document.getElementById('toy-collection').appendChild(card);
    })
  })
});
