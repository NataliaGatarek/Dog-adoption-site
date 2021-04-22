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