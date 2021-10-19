let count = 0;
let change = document.getElementById("count-el")

function increment(){
  console.log("clicked")
  count = count + 1;
  change.innerText = count;
  console.log(count)
}

function save() {
  let name = document.getElementById("save-el");
  document.getElementById("save-el").textContent += " " + count + " ➡ ";
  change.innerText = 0;
  count = 0;
}