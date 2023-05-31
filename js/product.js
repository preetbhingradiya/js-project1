import nav from "../node/index.js";

document.querySelector(".navbar").innerHTML = nav();

let show = (data) => {
  data.map((temp) => {
    let div = document.createElement("div");

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
    let buy = document.createElement("button");
    buy.innerHTML = "buy now";
    div.append(image, titale, desc, pri, cat, rat, add, buy);
    document.querySelector(".product").append(div);

    add.addEventListener("click", () => {
      let store = JSON.parse(localStorage.getItem("cart")) || [];
      // console.log(store);
      // store.push(temp);
      let exit = false;
      store.push(temp);
      
      store.map((ele) => {
        if (ele.id == temp.id) {
          exit = true;
          console.log(ele);
        }
      });

      if(exit==false){
        store.push({ ...temp, qty: 1 });
        localStorage.setItem("cart", JSON.stringify(store));
        window.location.reload();
      }

      // localStorage.setItem("cart", JSON.stringify(store));
    });
  });
};

fetch("https://dummyjson.com/products")
  .then((ele) => ele.json())
  //   .then((val) => console.log(val.products));
  .then((val) => show(val.products));
