// Get the modal
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("myImg");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
let span = document.getElementsByClassName("close");
console.log(span)
for (const close of span) {
  close.addEventListener('click', function () {
   console.log("closing")
 modal.style.display = "none";
 })
}

