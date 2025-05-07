let changeColor = document.querySelector(".h1-change-Color");
changeColor.style.color = "white";
changeColor.style.backgroundColor = "green";

let intro = document.getElementById("intro");

intro.style.color = "white";
intro.style.backgroundColor = "black";

let imageTag = document.getElementsByTagName("img")[0];
imageTag.src =
  "https://cdn.pixabay.com/photo/2025/04/29/13/22/cityscape-9567180_1280.jpg";

let ul = document.querySelector("#class-list");

let items = ["item1", "item2", "item3"];

items.forEach(item => {
    let li = document.createElement("li")

    li.innerText = item
    li.style.color = "green"
    li.style.border = "1px black solid"
    ul.appendChild(li)
})