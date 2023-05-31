document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let user = JSON.parse(localStorage.getItem("user-data"));
  console.log(user);
  let store = {
    email: document.getElementById("emil").value,
    password: document.getElementById("password").value,
  };
  console.log(store);

  if (store.email == user.email && store.password == user.password) {
    alert("sucessed! your acount is login");
    location.href = "../index.html";
  } else {
    alert("please enter correct email or password");
  }
});
