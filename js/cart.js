import nav from "../extra/index.js";

document.querySelector(".navbar").innerHTML = nav();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const show = (data) => {
  let price = 0;
  for (let i = 0; i < cart.length; i++) {
    price += cart[i].price * cart[i].qty;
  }
  document.getElementById("total-pri").innerHTML=`Total-prices :${price}`

  data.map((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "set");

    let img = document.createElement("img");
    img.src = ele.images[0];

    let titale = document.createElement("h3");
    titale.innerHTML = ele.title;
    let cat = document.createElement("h5");
    cat.innerHTML = ele.category;
    let temp = document.createElement("div");
    temp.setAttribute("class", "wrapper");
    temp.append(titale, cat);

    let incre = document.createElement("button");
    incre.innerHTML = "+";
    let quntity = document.createElement("p");
    quntity.innerHTML = 1;
    let desc = document.createElement("button");
    desc.innerHTML = "-";
    let store = document.createElement("div");
    store.setAttribute("class", "qyt");
    store.append(desc, quntity, incre);

    let pri = document.createElement("h4");
    pri.innerHTML = `Price :$ ${ele.price}`;
    let wrapeer=document.createElement("div")
    wrapeer.setAttribute("class","price")
    wrapeer.append(pri)

    div.append(img, temp, store,wrapeer);
    document.getElementById("cart").append(div);

    incre.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.map((val, index) => {
        if (val.id == ele.id) {
          // console.log((cart[index].qty += 1));
          document.querySelector("p").innerHTML = cart[index].qty += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
    });

    desc.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.map((val, index) => {
        if (val.id == ele.id) {
          // console.log((cart[index].qty -= 1));
          document.querySelector("p").innerHTML = cart[index].qty -= 1;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
    });

  });
  document.getElementById("done").addEventListener("click",()=>{
    let a=document.getElementById("size").value
    let dis1=parseInt(price*20/100)
    let dis2=parseInt(price*50/100)
    let dis3=parseInt(price*70/100)
    let obj={
      discount:a
    }
    console.log(obj.discount);
    if(obj.discount=="20%"){
      document.getElementById("dis").innerHTML=`discount-price :${price-dis1}`
    }
    else if(obj.discount=="50%"){
      document.getElementById("dis").innerHTML=`discount-price :${price-dis2}`
    }
    else if(obj.discount=="70%"){
      document.getElementById("dis").innerHTML=`discount-price :${price-dis3}`
    }
  })
};

show(cart);
