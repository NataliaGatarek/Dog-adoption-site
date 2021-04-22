
fetch("https://api.thedogapi.com/v1/breeds?x-api-key=41fbcc65-cb08-4b79-91e8-c497c6dba122")
    .then((response) => {
        console.log(response);
        return response.json();
    }) 
    .then((data) => {
      addEvents(data);
      displayData(data);
      createSelectOptions(data);
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
      temp += "<td>" + post.name + "</td>";
      temp += "<td>" + post.breed_group + "</td>";
      temp += "<td>" + post.life_span + "</td>";
      temp += "<td>" + post.temperament + "</td></tr>";
    });
    document.getElementById("tbodyOne").innerHTML = "";
    document.getElementById('tbodyOne').innerHTML = temp;
  }
};
//adding events, two event listners under one function 
const addEvents = (data) => {
  let checkboxElms = Array.from(document.querySelectorAll("input[type=checkbox]"));
  checkboxElms.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      filterData(data);
    });
  });
  document.getElementById("selectSpan").addEventListener("change", () => {
    filterData(data);
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
  else if (selectElms == oneData.life_span && checkboxElms.includes(oneData.breed_group)) {
    data.forEach((oneData) => { 
    filteredData.push(oneData);
    }
     })
  }
  displayData(filteredData);
  console.log(filteredData);
};
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
 