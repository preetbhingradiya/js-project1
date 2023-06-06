let cart = JSON.parse(localStorage.getItem("cart")) || [];

const show = (data) => {
  let price = 0;
  for (let i = 0; i < cart.length; i++) {
    price += cart[i].price*cart[i].qty;
  }
  console.log(price);

  data.map((ele) => {
    console.log(ele);
  });
};

show(cart);
