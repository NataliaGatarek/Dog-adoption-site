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