
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
//const displayDataTree = (data) => {
 //  const tr = document.getElementById("group");
   // data.forEach((post) => {
   //     const td = document.createElement("td");
    //    td.innerHTML = post.breed_group;
     //   tr.appendChild(td);
    //});
//}
//const displayDataFour = (data) => {
   //const tr = document.getElementById("span");
   // data.forEach((post) => {
   //     const td = document.createElement("td");
   //     td.innerHTML = post.life_span;
    //    tr.appendChild(td);
   // });
//}

    //data.forEach((row) => {
      //  const tr= document.createElement("tr");
        //row.forEach((cell) => {
          //  const td = document.createElement("td");
           // td.textContent = cell;
          //  tr.appendChild(td);
       // })
       // tableBody.appendChild(tr); 
   // })
//}

//const addData = (data) => {
  //  const tr = document.getElementById("span");
   // data.forEach((post) => {
    //    var newRow = document.createElement("tr");
    //    var newCell = document.createElement("td");
     //   newCell.innerHTML = post.life_span;
     //   newRow.append(newCell);
     //   document.getElementById("span").appendChild(newRow);
      //  document.getElementById("span").value = '';
  // });
//}
  


    
    
   
    
    