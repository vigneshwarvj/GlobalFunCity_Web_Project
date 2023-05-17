//To Increasing the value in the my bag in the header:
let myBag = document.querySelector(".mybag");
let uniqueUser = JSON.parse(localStorage.getItem("unique_id"));

if (uniqueUser) {
  let cart = JSON.parse(localStorage.getItem("add_to_cart_products"));

  if (cart && cart.length > 0) {
    myBag.innerHTML = "My Bag (" + cart.length + ")";
  } else {
    myBag.innerHTML = "My Bag (0)";
  }
} else {
  myBag.innerHTML = "My Bag (0)";
}