// Get the modal 1 
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");

// Get the modal 2
let modalOne = document.getElementById("myModalOne");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let imgOne = document.getElementById("myImgOne");
let modalImgOne = document.getElementById("img01One");
let captionTextOne = document.getElementById("captionOne");

// Get the modal 3
let modalTwo = document.getElementById("myModalTwo");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let imgTwo = document.getElementById("myImgTwo");
let modalImgTwo = document.getElementById("img01Two");
let captionTextTwo = document.getElementById("captionTwo");


// closing code for all modals
let span = document.getElementsByClassName("close");
console.log(span)
for (const close of span) {
  close.addEventListener('click', function () {
   console.log("closing")
 modal.style.display = "none";
 })
}
//opening code for all modals
let open = document.getElementsByClassName("modalClass");
console.log(open)
for (const newOpen of open) {
  newOpen.addEventListener('click', function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt; 
  })
}
