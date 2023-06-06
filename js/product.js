import nav from "../extra/index.js";

document.querySelector(".navbar").innerHTML = nav();

let show = (data) => {
  data.map((temp) => {
    let div = document.createElement("div");
    div.setAttribute("class","box")

    let image = document.createElement("img");
    image.src = temp.images[0];
    let titale = document.createElement("h2");
    titale.innerHTML = `Title :${temp.title}`;
    let desc = document.createElement("p");
    desc.innerHTML = `Description :${temp.description}`;
    let pri = document.createElement("h4");
    pri.innerHTML = `Price :${temp.price}`;
    let cat = document.createElement("h5");
    cat.innerHTML = `Category :${temp.category}`;
    let rat = document.createElement("p");
    rat.innerHTML = `Rating :${temp.rating}`;
    let add = document.createElement("button");
    add.innerHTML = "add to cart";
    add.setAttribute("class","btn1")
    let buy = document.createElement("button");
    buy.innerHTML = "buy now";
    buy.setAttribute("class","btn2")
    let btn = document.createElement("div");
    btn.append(add, buy);
    div.append(image, titale, desc, pri, cat, rat,btn);
    document.querySelector(".product").append(div);

    add.addEventListener("click", () => {
      let store = JSON.parse(localStorage.getItem("cart")) || [];

      let exit = false;

      store.map((val, index) => {
        if (val.id == temp.id) {
          store[index].qty += 1;
          localStorage.setItem("cart", JSON.stringify(store));
          exit = true;
        }
      });

      if (!exit) {
        store.push({ ...temp, qty: 1 });
        localStorage.setItem("cart", JSON.stringify(store));
        alert("add to cart");
      }
    });
  });
};

fetch("https://dummyjson.com/products")
  .then((ele) => ele.json())
  //   .then((val) => console.log(val.products));
  .then((val) => show(val.products));
