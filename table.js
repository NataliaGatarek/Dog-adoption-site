fetch("https://api.thedogapi.com/v1/breeds?x-api-key=41fbcc65-cb08-4b79-91e8-c497c6dba122")
    .then((response) => {
        console.log(response);
        return response.json();
    }) 
    .then((data) => {
      addEvents(data);
      displayData(data);
      //createSelectOptions(data);
      createOptions(data);
      findSpan(data);

    })
    .catch((error) => {
        console.log(error);
    })
  
//table
const displayData = (data) => {
  if (data.length > 0) {
  let temp = "";
  data.forEach((post) => {
  temp += "<tr>";
  temp += `<td>${post.name}</td>`
  temp += `<td>${post.breed_group}</td>`
  temp += `<td>${post.life_span}</td>`
  temp += `<td>${post.temperament}</td></tr>`;
    });
    document.getElementById("tbodyOne").innerHTML = "";
    document.getElementById('tbodyOne').innerHTML = temp;
  }
};
//adding events, two event listners under one function 
const addEvents = (OneData) => {
  let checkboxElms = Array.from(document.querySelectorAll("input[type=checkbox]"));
  checkboxElms.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
    filterData(OneData);
    });
  });
  document.getElementById("selectSpan").addEventListener("change", () => {
    filterData(OneData);
  });
};
//filetring and displaying data
const filterData = (OneData) => {
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
    //this condition needs to be, so the filteredData is never empty
    filteredData = OneData
  //if checkbox is choosen than display breeds
  } else if (checkboxElms.length !== 0 && selectElms == "all") {
    OneData.forEach((OneData) => {
      if (checkboxElms.includes(OneData.breed_group)) {
        filteredData.push(OneData);
      }
    });
  }
  //if select is choosen than display life span (selectElms is not an array, so do not use includes method!)
  else if (checkboxElms.length === 0 && selectElms !== "all") {
    OneData.forEach((OneData) => {
      if (selectElms == OneData.life_span) {
        filteredData.push(OneData);
      }
    });
  }
  //both combined
  else {
    OneData.forEach((OneData) => {
      if (selectElms == OneData.life_span && checkboxElms.includes(OneData.breed_group)) {
        filteredData.push(OneData);
      }
    });
  };
  //alert if match is not found
  if (filteredData.length !== 0) {
  displayData(filteredData);
  }
  else {
 swal("Sorry!", "No matches found!", "info");
  };
  console.log(filteredData);
};
//filtering double results from life span
const findSpan = (OneData) => {
  let span = OneData.map((OneData) => {
    return OneData.life_span
  });
    let newSpan = span.filter((life_span, index) => {
    return span.indexOf(life_span) === index;
  });
  createOptions(newSpan);
};
//select option
const createOptions = (span) => {
  let select = document.getElementById("selectSpan");
  let temporary = "<option value='all'>All</option>";
  span.forEach((life_span, index) => {
  temporary += `<option id='${index}'value='${life_span}'>${life_span}</option>`;
  });
  select.innerHTML = temporary;
};

