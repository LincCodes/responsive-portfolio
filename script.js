const menu = document.querySelector("#menu");
const items = document.querySelector("#items");
const body = document.querySelector("body");

menu.addEventListener("click", show);
items.addEventListener("click", hide);
body.addEventListener("click", hide, true);

function show() {
	console.log("Hello")
  items.classList.add("show");
}
function hide() {
  items.classList.remove("show");
}
