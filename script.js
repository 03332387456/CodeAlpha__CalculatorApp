const themeBtn = document.getElementById("theme-btn");
const body = document.body;

// Check if user has saved theme preference
if(localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeBtn.textContent = "Light Mode";
}

// Toggle Theme
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if(body.classList.contains("dark-mode")) {
    themeBtn.textContent = " Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.textContent = " Dark Mode";
    localStorage.setItem("theme", "light");
  }
});


let input = document.getElementById("input")
let EqualBtn = document.getElementById("EqualBtn")
let clearAll = document.getElementById("clearAll")

// get value of buttons
function getValue(e) {
    input.value += e
}

EqualBtn.addEventListener("click" , ()=> {  
    let ans = eval(input.value)
    input.value = ans
})

clearAll.addEventListener("click" , ()=>{
   input.value = ""
})


