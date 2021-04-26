fetch("https://api.thedogapi.com/v1/breeds/search?x-api-key=41fbcc65-cb08-4b79-91e8-c497c6dba122&q=terrier")
    .then((response) => {
        console.log(response);
        return response.json();
    }) 
    .then((data) => {
        console.log(data)
        displayTerrier(data)
    })
    .catch((error) => {
        console.log(error);
    })

const displayTerrier = (data) => {
   data.forEach (post => {
       let card = document.createElement("div");
       card.classList.add("cardOne");

       let name = document.createElement("h6");
       name.innerHTML = post.name;
       card.appendChild(name);
       
       let description = document.createElement("p")
       description.innerHTML = post.temperament;
       card.appendChild(description);
       
       let bredFor = document.createElement("p")
       bredFor.innerHTML = post.bred_for
       card.appendChild(bredFor);

       let container = document.querySelector("#container");
       container.appendChild(card);
   });
}
