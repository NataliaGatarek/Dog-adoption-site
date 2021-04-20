
fetch("https://api.thedogapi.com/v1/breeds?x-api-key=41fbcc65-cb08-4b79-91e8-c497c6dba122")
    .then((response) => {
        console.log(response);
        return response.json();
    }) 
    .then((data) => {
        //if (data.length > 0) {
        //  let temp = "";
        //  data.forEach((post) => {
         //   temp += "<tr>";
          //  temp += "<td>" + post.name + "</td>";
         //   temp += "<td>" + post.breed_group + "</td>";
         //   temp += "<td>" + post.life_span + "</td>";
         //   temp += "<td>" + post.temperament + "</td></tr>";
        //  });
         //   document.getElementById('tbodyOne').innerHTML = temp;
      addEvents(data);
      displayData(data);
      createSelectOptions(data);
    })
    .catch((error) => {
        console.log(error);
    })

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
    document.getElementById('tbodyOne').innerHTML = temp;
  }
};
  
const addEvents = (data) => {
  let checkboxElms = Array.from(document.querySelectorAll("input[type='checkbox']"));
  checkboxElms.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      filterData(data);
    });
  });
};

const filterData = (data) => {
  let checkboxElms = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map((checkbox) => {
    return checkbox.value
  });
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
