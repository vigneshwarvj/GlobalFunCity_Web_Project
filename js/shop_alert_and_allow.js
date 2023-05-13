//Alert in the wishlist page:

const bookingUser = JSON.parse(localStorage.getItem("unique_id"));

const btnWishlist = document.getElementById("wishlist_anchor");
btnWishlist.addEventListener("click", () => {
  if (bookingUser) {
    window.location.href = "../../pages/shop/wishlist.html";
  } else {
    alert("A reminder to make sure you are not logged in");
  }
});

// Alert in the mybag page:
const btnMybag = document.getElementById("mybag_anchor");
btnMybag.addEventListener("click", () => {
  if (bookingUser) {
    window.location.href = "../../pages/shop/cart.html";
  } else {
    alert("A reminder to make sure you are not logged in");
  }
});

//Alert in the buy now button in the product:
// const btnaddtoBag = document.getElementById("btn-buynow-to-add-in-bag");
// btnaddtoBag.addEventListener("click", function(){
//     if(bookingUser){
//         window.location.href = "../../pages/shop/cart.html";
//     } else{
//         alert("Please log in to buy our products you love!")
//     }
// })