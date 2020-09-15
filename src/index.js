let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  loadToys();
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
});
loadToys=()=>{
  fetch('http://localhost:3000/toys').then((toys)=>toys.json()).then((result)=>{createToyDivs(result)});
}
createToyDivs=(toys)=>{
  toys.forEach(toy => {
    div=document.createElement('div');
    nameH=document.createElement('h2');
    nameH.innerHTML=toy.name;
    image=document.createElement('img');
    image.src=`${toy.image}`;
    image.className='toy-avatar'
    likesP=document.createElement('p');
    likesP.innerHTML=`Likes :${toy.likes}`;
    button=document.createElement('button');
    button.className='like-btn'
    button.innerHTML='Like !'
    div.append(nameH,image,likesP,button);
    document.getElementById('toy-collection').appendChild(div);
    
  });
//   h2 tag with the toy's name
// img tag with the src of the toy's image attribute and the class name "toy-avatar"
// p tag with how many likes that toy has
// button tag with a class "like-btn"
// 
}