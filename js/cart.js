import nav from "../extra/index.js";

document.querySelector(".navbar").innerHTML = nav();

let cart = JSON.parse(localStorage.getItem("cart"))||[];

const show = (data) => {
  let price = 0;
  for (let i = 0; i < cart.length; i++) {
    price += cart[i].price * cart[i].qty;
  }
  console.log(price);

  data.map((ele) => {
    
    let div=document.createElement("div")
    div.setAttribute("class","set")

    let img=document.createElement("img")
    img.src=ele.images[0];

    let titale = document.createElement("h2");
    titale.innerHTML = ele.title;
    let cat = document.createElement("h5");
    cat.innerHTML = ele.category;
    let temp=document.createElement("div")
    temp.setAttribute("class","wrapper")
    temp.append(titale,cat)

    let incre=document.createElement("button")
    incre.innerHTML="+"
    let quntity=document.createElement("p")
    quntity.innerHTML=1
    let desc=document.createElement("button")
    desc.innerHTML="-"
    let store=document.createElement("div")
    store.setAttribute("class","qyt")
    store.append(desc,quntity,incre)



  });
};


show(cart);
