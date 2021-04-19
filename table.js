
fetch("https://api.thedogapi.com/v1/breeds?x-api-key=41fbcc65-cb08-4b79-91e8-c497c6dba122")
    .then((response) => {
        console.log(response);
        return response.json();
    }) 
    .then((data) => {
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
      }
)
        //console.log(data);
        //displayData(data);
        //displayDataTwo(data);
        //displayDataTree(data);
        //displayDataFour(data);
        //addData(data);
        //addDataOne(data);


    .catch((error) => {
        console.log(error);
    })


//const displayData = (data) => {
  //  const ul = document.getElementById("my-list");
  //  data.forEach((post) => {
  //      const li = document.createElement("li");
  //      li.innerHTML = post.name;
  //      ul.appendChild(li);
  //  });
//};

//const tableBody = document.querySelector("#newTable > tbody");
//console.log(tableBody);


//const displayDataTwo = (data) => {
 //  const tr = document.getElementById("newT");
  //  data.forEach((post) => {
   //     const td = document.createElement("td");
   //     td.innerHTML = post.name;
    //    tr.appendChild(td);
  //  });
//}

const checkboxElems = document.querySelectorAll("input[type='checkbox']");
checkboxElems.addEventListener("change", function() {
    if(this.checked) {
        // Checkbox is checked..
    } else {
        // Checkbox is not checked..
    }
});
console.log(checkboxElems);

//const checkboxElems = document.querySelectorAll("input[type='checkbox']").forEach((checkboxElems) => {
 // checkboxElems.addEventListener("change", function ())
//});
