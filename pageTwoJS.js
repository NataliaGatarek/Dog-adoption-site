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

const gettingImage = (myImg, card) => {
    fetch(`https://api.thedogapi.com/v1/images/${myImg}?x-api-key=41fbcc65-cb08-4b79-91e8-c497c6dba122`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            createImg(data, card)
        })
        .catch((error) => {
            console.log(error);
        });
}
const createImg = (data, card) => {
    console.log(data)
        let image = document.createElement("img");
        image.classList.add("ImageCard");
        image.setAttribute("src", data.url)
        card.appendChild(image);
}
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

       //let image = document.createElement("img");
       //image.src = `${myImage}`;
       //let ImageCard = document.createElement("img");
       //ImageCard.setAttribute("src", post.url )
       //image.classList.add("ImageCard");
       //card.appendChild(image);

       let buttonImg = document.createElement("button");
       buttonImg.innerHTML = "show button";
       buttonImg.setAttribute("id", post.reference_image_id);
       buttonImg.addEventListener("click", function (event) {
           gettingImage(event.target.id, card)

        //console.log(event)
       })
       card.appendChild(buttonImg);

       let container = document.querySelector("#container");
       container.appendChild(card);
   });
}

         