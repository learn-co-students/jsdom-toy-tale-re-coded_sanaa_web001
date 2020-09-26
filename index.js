
function submitData( name, image,likes) {
return fetch( 'localhost:3000/toys', {
    method: "POST",
headers:
{
  "Content-Type": "application/json",
  "Accept": "application/json"
}

body: JSON.stringify({
  "name": "Jessie",
  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  "likes": 0
})
