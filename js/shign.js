document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let data = {
    firstname: document.getElementById("fname").value,
    lastname: document.getElementById("lname").value,
    email: document.getElementById("emil").value,
    password: document.getElementById("pass").value,
    conformpass: document.getElementById("conforpass").value,
  };

  localStorage.setItem("user-data", JSON.stringify(data));

  if(data.password==data.conformpass && data.password.length>=8){
    location.href="../index.html"
  }
  else if(data.password.length<=8){
    alert("plese enter minimum 8 character")
  }
  else{
    alert("check the password and try again")
  }

  console.log(data);
});

let btn = document.getElementById("show");
let password = document.getElementById("pass");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  btn.className = `fa-solid fa-eye${password.type === "password" ? "" : "-slash"}`;

  password.type = password.type === "password" ? "text" : "password";
});
