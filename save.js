//this is the playground

const filterData = (data) => {
  let checkboxElms = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map((checkbox) => {
    return checkbox.value
  });
  let selectElms = document.getElementById("selectSpan").value;
  console.log(selectElms);
  console.log(checkboxElms);
  let filteredData = []
  if (checkboxElms.length === 0) {
    displayData(data);
  } else {
    data.forEach((data) => {
      if (checkboxElms.includes(data.breed_group)) {
        filteredData.push(data);
      }
    });
    displayData(filteredData);
  }
};



const filterData = (data) => {
  let checkboxElms = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map((checkbox) => {
    return checkbox.value
  });
  let selectElms = document.getElementById("selectSpan").value;
  console.log(selectElms);
  console.log(checkboxElms);
  let filteredData = [];
  if (checkboxElms.length === 0 && selectElms.length === 0) {
    displayData(data);
  } else if (checkboxElms.length > 0 && selectElms.length === 0) {
    data.forEach((data) => {
      checkboxElms.includes(data.breed_group) 
      filteredData.push(data);
    });
    displayData(filteredData);
  } else if (checkboxElms.length === 0 && selectElms.length > 0) {
    data.forEach((data) => {
      selectElms.includes(data.life_span) 
      filteredData.push(data);
    });
    displayData(filteredData);
  }
};
     
     checkboxElms.forEach((data) => {
       selectElms.forEach((data) => {
         filteredData.push(data);
       })
     })

     //both
  if (checkboxElms.length > 0 && selectElms.length > 0) {
    data.forEach((data) => {
      if (selectElms.includes(data.life_span) && checkboxElms.includes(data.breed_group)) {
        filteredData.push(data);
      }
    });
    displayData(filteredData);
}
  
 //only checkboxes
 // if (checkboxElms.length === 0) {
  //  displayData(data);
 // } else {
//    data.forEach((data) => {
  //    if (checkboxElms.includes(data.breed_group)) {
  //      filteredData.push(data);
  //    }
  //  });
  //  displayData(filteredData);
 // }
  //only select
 // if (selectElms.length === 0) {
 //   displayData(data);
 // } else {
 //   data.forEach((data) => {
    //  if (selectElms.includes(data.life_span)) {
   //     filteredData.push(data);
  //    }
  //  });
  //  displayData(filteredData);
 // }
  //nothing

const displayData = (data) => {
  if (data.length > 0) {
    let temp = "";
    data.forEach((post) => {
  temp += "<tr>";
  temp += `<td>${post.name}</td>`
  temp +=  `<td>${post.breed_group}</td>`
  temp +=  `<td>${post.life_span}</td>`
  temp +=  `<td>${post.temperament}</td></tr>`;
    });
  }
}
//const displayData = (data) => {
//  if (data.length > 0) {
 //   let temp = "";
 //   data.forEach((post) => {
  //    temp += "<tr>";
  //    temp += "<td>" + post.name + "</td>";
  //    temp += "<td>" + post.breed_group + "</td>";
   //   temp += "<td>" + post.life_span + "</td>";
   //   temp += "<td>" + post.temperament + "</td></tr>";
  //  }

  //both combined
  //else {
  //  data.forEach((oneData) => {
  //  if (selectElms == oneData.life_span && checkboxElms.includes(oneData.breed_group)) { 
   // filteredData.push(oneData);
  //  }
   //  })
  //}
 // displayData(filteredData);
 // console.log(filteredData);
//};
// Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

//let span = document.getElementsByClassName("close");
//for(let i=0;i<span.length;i++){
 //   span[i].onclick = function() {
 //      modal[i].style.display = "none";
 //   }
 //}
 // Get the <span> element that closes the modal
//let span = document.getElementsByClassName("closeTwo")[0];

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}


//let span = document.getElementsByClassName("close closeOne closeTwo");
//span.onclick = function() {
//modal.style.display = "none";
//}

//const span = document.querySelectorAll('.close');
//for (const close of span) {
 //   close.addEventListener('onclick', function () {
 //   modal.style.display = "none";
 //   })
//}

//creation of the select menu
const createSelectOptions = (data) => {
  let span = data.map((data) => {
    return data.life_span
  });
  let newSpan = [];
  span.forEach((life_span) => {
    if (!newSpan.includes(life_span)) {
      newSpan.push(life_span);
    }
  });
  let select = document.getElementById("selectSpan");
  newSpan.forEach((span) => {
    let option = document.createElement("option");
    option.innerHTML = span;
    option.setAttribute("value", span);
    select.appendChild(option);
  });
};
//filetring and displaying data
const filterData = (data) => {
  let checkboxElms = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map((checkbox) => {
    return checkbox.value
  });
  let selectElms = document.getElementById("selectSpan").value;
  console.log(selectElms);
  console.log(checkboxElms);
  //filtering data//
  let filteredData = []
  //if nothing is choosen, than display data
  if (checkboxElms.length === 0 && selectElms === "all") {
    displayData(oneData);
  //if checkbox is choosen than display breeds
  } else if (checkboxElms.length !== 0 && selectElms == "all") {
    data.forEach((oneData) => {
      if (checkboxElms.includes(oneData.breed_group)) {
        filteredData.push(oneData);
      }
    });
  }
  //if select is choosen than display life span (selectElms is not an array, so do not use includes method!)
  else if (checkboxElms.length === 0 && selectElms !== "all") {
    data.forEach((oneData) => {
      if (selectElms == oneData.life_span) {
        filteredData.push(oneData);
      }
    });
  }
  //both combined
  else {
  data.forEach((oneData) => {
   if (selectElms == oneData.life_span && checkboxElms.includes(oneData.breed_group)) { 
    filteredData.push(oneData);
    }
     })
  }
  //alert if match is not found
  if (filteredData.length !== 0) {
    displayData(filteredData);
    findSpan(filteredData);
  }
  else {
    alert("not found")
  }
  console.log(filteredData);
};

//all pagetwo
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