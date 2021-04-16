
const dots = document.querySelectorAll('.dots');
for (const dot of dots) {
    dot.addEventListener('click', function (event) {
        showHide(event);
  });  
}


const less = document.querySelectorAll('.less');
for (const thing of less) {
    thing.addEventListener('click', function (event) {
        showHide(event);
    })
}

const showHide =(event) => {
  console.log(event.target.closest('div').id)
  const num = event.target.closest('div').id
  const dots = document.getElementById(num + "-dots");
  const less = document.getElementById(num + "-less");
  const more = document.getElementById(num + "-more");
   if (dots.style.display !== 'none') {
        dots.style.display = 'none';
       more.style.display = 'inline';
       less.style.display = 'inline';
   } else {
        dots.style.display = 'inline';
       more.style.display = 'none';
       less.style.display = 'none';
    }
}
//function showHide(event) {
  //  console.log(event.target.closest('div').id)
   // const num =event.target.closest('div').id
  //  const dots = document.getElementById(num+"-dots");
  //  const less = document.getElementById(num + "-less");
  //  const more = document.getElementById(num + "-more");
  //  if (dots.style.display !== 'none') {
  //      dots.style.display = 'none';
  //      more.style.display = 'inline';
   //     less.style.display = 'inline';
   // } else {
   //     dots.style.display = 'inline';
   //     more.style.display = 'none';
   //     less.style.display = 'none';
   // }
//}

//function showHideTwo(event) {
 // let moreText = document.getElementById("moreText");
 // let buttonID = event.target.id;
 // if (!moreText.classList.contains("show")) {
//    moreText.classList.add("show");
 //   document.getElementById(buttonID).innerHTML = "Show Less";
//  } else {
 //   moreText.classList.remove("show");
//    document.getElementById(buttonID).innerHTML = "Show More";
 // }
//}

const showHideTwo = (event) => {
  let moreText = document.getElementById("moreText");
  let buttonID = event.target.id;
 if (!moreText.classList.contains("show")) {
   moreText.classList.add("show");
   document.getElementById(buttonID).innerHTML = "Show Less";
} else {
   moreText.classList.remove("show");
   document.getElementById(buttonID).innerHTML = "Show More";
 }
}

let button = document.getElementById("showMoreButton");
if (button) {
  button.addEventListener("click", function (event) {
 showHideTwo(event);
  });
  }

//} 
//button.addEventListener("click", function (event) {
// showHideTwo(event);
//});

//console.log(data);
//const ul = document.getElementById("my-list");
//data.forEach((id) => {
  //const li = document.createElement("li");
  //li.innerHTML = id.name;
  //ul.appendChild(li);
//});
