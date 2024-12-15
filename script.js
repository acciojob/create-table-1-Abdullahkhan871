function insert_Row() {
  let table = document.querySelector("#sampleTable tbody");
  //   console.log(table);

  let tr = document.createElement("tr");
  let tdOne = document.createElement("td");
  let tdTwo = document.createElement("td");
  tdOne.innerText = "New Cell1";
  tdTwo.innerText = "New Cell2";
  tr.append(tdOne, tdTwo);
  table.prepend(tr);
}
