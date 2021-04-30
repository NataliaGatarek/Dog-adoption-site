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

const gettingImage = (myImg, card, buttonImg) => {
    fetch(`https://api.thedogapi.com/v1/images/${myImg}?x-api-key=41fbcc65-cb08-4b79-91e8-c497c6dba122`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            createImg(data, card, buttonImg)
        })
        .catch((error) => {
            console.log(error);
        });
}
const createImg = (data, card, buttonImg) => {
    console.log(data)
    buttonImg.style.visibility = "hidden";
    let image = document.createElement("img");
    image.classList.add("card-content");
    image.classList.add("zoom");
    image.setAttribute("src", data.url)
    image.setAttribute("id", image)
    let closedImg = document.createElement("SPAN");
    closedImg.innerHTML = "&times;";
    closedImg.addEventListener("click", function () {
        image.classList.add("removed")
        closedImg.classList.add("removed");
        buttonImg.style.visibility="visible";
    })
//     if (closedImg.classList.contains("removed")) {
//      console.log("hello")
//    buttonImg.style.visibility="visible";
// } else {
//    buttonImg.style.visibility="hidden";
//  }
   // buttonImg = document.getElementById("post.reference_image_id");
   // if (image.classList.contains("removed")) {
   //     buttonImg.classList.add("show")
   // } else {buttonImg.classList.add("removed")}
   card.appendChild(closedImg);
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

       let buttonImg = document.createElement("button");
       buttonImg.innerHTML = "dog's picture";
       buttonImg.classList.add("btn-light")
       buttonImg.setAttribute("id", post.reference_image_id);
       buttonImg.addEventListener("click", function (event) {
           gettingImage(event.target.id, card, buttonImg)
       })
      card.appendChild(buttonImg);
      let container = document.querySelector("#container");
       container.appendChild(card);
   });
}

//const showHideTwoP = (data, card) => {
  //  console.log(data)
    //console.log(card)
//let image = document.getElementById("image");
//let buttonImg = document.getElementById("post.reference_image_id");
//if (!image.classList.contains("removed")) {
//buttonImg.classList.add("removed");
//} else {
//buttonImg.classList.remove("removed");
//}}
 