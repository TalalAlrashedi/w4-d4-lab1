let changeColor = document.querySelector(".h1-change-Color");
changeColor.style.color = "white";
changeColor.style.backgroundColor = "green";

let intro = document.getElementById("intro");

intro.style.color = "white";
intro.style.backgroundColor = "black";
intro.style.fontStyle = "italic";

let imageTag = document.getElementsByTagName("img")[0];
imageTag.src =
  "https://cdn.pixabay.com/photo/2025/04/29/13/22/cityscape-9567180_1280.jpg";

let ul = document.querySelector("#class-list");

let items = ["item1", "item2", "item3"];


items.forEach((item) => {
  let li = document.createElement("li");
  ul.style.display = "flex";
  ul.style.gap = "20px"
  li.innerText = item;
  li.style.color = "green";
  li.style.border = "0.1px black solid";
  ul.appendChild(li);
});

let table = document.getElementsByClassName("table-container")[0];
table.classList.add("custom-table");
for (let i = 0; i < 2; i++) {
  const row = document.createElement("tr");
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement("td");
    cell.textContent = `clee ${i + 1}-${j + 1}`;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.getElementById("table-container").appendChild(table);
