function showBox() {
  document.getElementById("h1").innerHTML = "you are great";
  document.getElementById("p").innerHTML =
    "you are great and happy person in teh room keep it going";
  let addingClass = document.getElementById("box");
  addingClass.className = "newClass";
}
function large() {
  document.getElementById("image").className = "large";
}
function normal() {
  document.getElementById("image").className = "small";
}
