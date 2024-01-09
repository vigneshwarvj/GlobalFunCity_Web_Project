// Offer Details
const offer_details = JSON.parse(localStorage.getItem("offer_details"));

if (!offer_details) {
  localStorage.setItem(
    "offer_details",
    JSON.stringify([
      {
        offer_about:
          "Check out our summer offer! We`re rewarding you with an amazing offer for planning your advance booking.",
        offer_desc: "Hurry up! Buy Tickets Enjoy the Summer!",
        offer_image:
          "https://img.freepik.com/premium-vector/summer-offer_1302-10076.jpg",
        offer_inclusion1: "Gala Dinner and Unlimited Cock",
        offer_inclusion2: "Stay in an Executive Room",
        offer_name: "Summer Offer",
        offer_price_for_adult: "Child 16 years & above and extra-person - $550",
        offer_price_for_children:
          "Child between the ages of 5 and 15 years - $350",
        offer_room: "The room for this offer is $299.00",
        offer_uuid: "ac43cb96-962b-40c0-ad09-95e45099d752",
        terms_and_condition1: "Packages are only for families.",
        terms_and_conditions2: "",
      },
      {
        offer_about:
          "For those who love to travel and explore, here is an exciting package. Book a stay for 3 nights and 4 days for 2 adults at Global Fun City Resort and enjoy a visit to Savanadurga Hill, a vineyard tour, access to an amusement park, indoor, outdoor, and lawn games, and more for just $600 + taxes.",
        offer_desc: "Enjoy in 3 Nights 4 days Offer in GFC",
        offer_image:
          "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_1920,h_1080,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/wonderla-amusement-parks-resort/3_nights_4_days_package_banner_yh4fvt",
        offer_inclusion1: "Outdoor, indoor and lawn games.",
        offer_inclusion2: "Access to the swimming pool.",
        offer_name: "3 Nights 4 Days Offer",
        offer_price_for_adult:
          "Day 3 - Global Fun City Park Visit Day 4 - Breakfast & Check-out.",
        offer_price_for_children:
          "Day 1 - Check-in, followed by a visit. Day 2 - Visit to Mountains",
        offer_room:
          "3 Nights & 4 Days Stay in Executive or Deluxe Room for 2 adults (Friday to Monday).",
        offer_uuid: "337fcaeb-2915-4e63-a353-92cbd82e9b53",
        terms_and_condition1:
          "The package is only for the visit to the hills; trekking and the risks associated with trekking are within the guest's scope.",
        terms_and_conditions2:
          "Kindly present the 2nd dose vaccination certificate at the time of check-in.",
      },
    ])
  );
}
// End card for offer_details

// Clothing Product Details
const clothing_details = JSON.parse(localStorage.getItem("clothing_details"));
if(!clothing_details) {

    localStorage.setItem("clothing_details" , JSON.stringify([{
      product_desc: 
      "This is a white t-shirt with a unique logo on the front. It is made from 100% cotton and is a great staple to add to your wardrobe.",
      product_name: 
      "White T - Shirt with logo",
      product_photo: 
      "https://iili.io/HX7ia1I.jpg",
      product_price: 
      "15.00",
      product_uuid: 
      "3b5b4d63-51dd-4592-a5c2-cda01e550e05",
      selecting: 
      "Clothing",
    },
    {
      product_desc: 
      "The black t-shirt is a simple design, with a logo that's too flashy. It is available in sizes from small to extra-large.",
      product_name: 
      "Black T- Shirt with logo",
      product_photo: 
      "https://iili.io/HXGQfkv.jpg",
      product_price: 
      "17.00",
      product_uuid: 
      "81edbc8f-31e0-4239-a30e-198ea9749668",
      selecting: 
      "Clothing",
    }, 
    {
      product_desc: 
      "If you love roller coasters, go-karts, and amusement parks, then you'll love this shirt! It's a playful design that will keep you entertained while wearing it.",
      product_name: 
      "Things I do in my spare time",
      product_photo: 
      "https://iili.io/HgvgW6Q.jpg",
      product_price: 
      "21.00",
      product_uuid: 
      "7d0340a5-7db7-415d-9d61-b59b548b640d",
      selecting: 
      "Clothing",
    },
  {
    product_desc: 
    "The water t-shirt with roller coaster is a stylish and comfy way to stay cool and look good while doing it. This shirt will keep you cool in the hot summer sun, and it also has a comfortable neckline.",
    product_name: 
    "Water T- Shirt",
    product_photo: 
    "https://iili.io/Hgvgw8P.webp",
    product_price: 
    "22.00",
    product_uuid: 
    "7178ca06-90f5-4cf8-8dcf-b3590552e273",
    selecting: 
    "Clothing",
  },
  {
    product_desc: 
"Everyone has been on a roller coaster ride in their life. Sometimes it's exciting and thrilling, sometimes it's scary and anxiety-inducing, and sometimes it's just plain boring. Eat Sleep roller coaster Repeat T-Shirt is a shirt that you can wear to remind yourself that you're going to be okay.",
product_name: 
"Eat Sleep Repeat T-Shirt",
product_photo: 
"https://iili.io/HgvgVMx.jpg",
product_price: 
"19.00",
product_uuid: 
"414c4638-1ab8-4a43-a6f0-75e97edbb318",
selecting: 
"Clothing",
  },
  {
    product_desc: 
    "This Gaint Wheel T-Shirt will get your wheels spinning. Whether you're cruising around the block, or driving on the highway, this shirt is a fun way to show your pride for all the things you love about wheels. What's better than a wheel? A big wheel! Now you can show your love for big wheels. A giant wheel T-shirt for a giant day. BUY NOW!",
    product_name: 
    "Gaint wheel T-Shirt ",
    product_photo: 
    "https://iili.io/HgvgMnj.jpg",
    product_price: 
    "22.00",
    product_uuid: 
    "7c5c7851-bb47-4822-89a5-ebe3e9997e2f",
    selecting: 
    "Clothing",
  }
  ]))
}

// Accessories Product Details
const accessories_details = JSON.parse(localStorage.getItem("accessories_details")
);
if (!accessories_details) {
  localStorage.setItem("accessories_details",JSON.stringify([
      {
        product_desc: 
        "Black Cap with logo is designed by Global Fun City. It will gives more cuteness to you!. BUY NOW!",
        product_name: 
        "Black Cap With Logo",
        product_photo: 
        "https://iili.io/HhUYQTJ.jpg",
        product_price: 
        "66.00",
        product_uuid: 
        "96ad0e93-f3a3-48cf-b600-95c6ed427926",
        selecting: 
        "access",
      },
      {
        product_desc: 
        "This Global white bag is perfect for the minimalist. With its clean and crisp design, this bag is perfect for carrying everything from your morning coffee to your lunch. The soft feel and the wide handles make this bag the perfect travel companion.",
        product_name: 
        "White Bag with logo",
        product_photo: 
        "https://iili.io/HgvgjcB.jpg",
        product_price: 
        "9.00",
        product_uuid: 
        "d26a9191-da2c-4c85-8b4c-8827b1b31f48",
        selecting: 
        "Accessories",
      },
      {
        product_desc: 
"This Global black bag is perfect for the minimalist. With its clean and crisp design, this bag is perfect for carrying everything from your morning coffee to your lunch. The soft feel and the wide handles make this bag the perfect travel companion.",
product_name: 
"Black Bag with logo",
product_photo: 
"https://iili.io/HgvgEZb.jpg",
product_price: 
"10.00",
product_uuid: 
"2cb800fc-0867-4350-aa0c-cf228b93ab3c",
selecting: 
"Accessories",
      },
    ])
  );
}

// Home Product Details
const home_details = JSON.parse(localStorage.getItem("home_details"));
if (!home_details) {
  localStorage.setItem(
    "home_details",
    JSON.stringify([
      {
        product_desc: 
        "When you need to wash off the grime and sweat from your morning workout, you can use the White Towel to dry off your skin. The towel is made of soft and absorbent microfiber material and is perfect for drying off your skin and hair",
        product_name: 
        "White Towel",
        product_photo: 
        "https://iili.io/Hjs2RUB.jpg",
        product_price: 
        "15.00",
        product_uuid: 
        "4d293f24-6f7b-4b4e-a8da-8bfcacb37a40",
        selecting: 
        "Home",
      },
    ])
  );
}

// Add to cart product details
// if(localStorage.getItem("add_to_cart_products")) {
//     return true;
// } else {
//     localStorage.setItem("add_to_cart_products", JSON.stringify([{}, {}, {}]))
// }

// Event details
const event_details = JSON.parse(localStorage.getItem("event_details"));
if (!event_details) {
  localStorage.setItem(
    "event_details",
    JSON.stringify([
      {
        eventName: "Waterfall",
        eventPhoto:
          "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_2.0,f_auto,fl_progressive.strip_profile,g_center,h_230,q_auto,w_305/v1/filestore/6jwx5705ueqy3s6q2gvmuad1kno5_BANNER_1638431388.jpg",
        events_uuid: "d26a2477-ace4-4dff-945f-1bcda83f07e3",
      },
      {
        eventName: "Horror House",
        eventPhoto:
          "https://5.imimg.com/data5/SELLER/Default/2021/8/LX/VG/OP/11334948/horror-house-services-500x500.png",
        events_uuid: "33de6bf3-cfd2-49ec-b406-8f896ce6d4a0",
      },
      {
        eventName: "3D Cinema",
        eventPhoto:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT068qwiNATm3wk_KD29qRoWiwww7BUR5_YOQ&usqp=CAU",
        events_uuid: "c00fa2cd-e2b0-4e32-aa4b-47ce154ca89c",
      },
    ])
  );
}

// Upcoming event details
const upcoming_event_details = JSON.parse(localStorage.getItem("upcoming_event_details"));
if (!upcoming_event_details) {
  localStorage.setItem("upcoming_event_details", JSON.stringify([
      {
        upcoming_event_category: "Festivel",
        upcoming_event_desc:
          "A folk festival celebrates traditional folk crafts and folk music. This list includes folk festivals worldwide, except those with only a partial focus on folk music or arts. Folk festivals may also feature folk dance or ethnic foods.\n        The festival has promoted the message of peace, friendship and brotherhood among nations worldwide through its cultural and traditional folk forms in the art of music and dance.\n\nIn the festival folk dance groups from the five continents will reinforce, through their performances, the message of friendship, communication and cooperation. A total of 800 dancers, choreographers, musicians, singers etc.",
        upcoming_event_end: "2024-02-13T17:00",
        upcoming_event_img:
          "https://festy.ancorathemes.com/wp-content/uploads/2020/05/image-143.jpg",
        upcoming_event_name: "Folklore Festival",
        upcoming_event_organizer: "Praveen",
        upcoming_event_organizer_email: "info@praveen.com",
        upcoming_event_organizer_ph_no: "+1 8608171080",
        upcoming_event_start: "2024-02-06T09:00",
        upcoming_event_uuid: "ea55f110-73f7-4d6c-a1fe-f37fd53604b7",
        upcoming_event_video: "https://youtu.be/PpC8ytyDm60",
      },
    ])
  );
}

//Hotel Details
const hotelDetails = JSON.parse(localStorage.getItem("hotelDetails"));

if(!hotelDetails) {localStorage.setItem("hotelDetails", JSON.stringify([
  {
    _hotelAmenties1: 
"Free Wifi",
_hotelAmenties2: 
"Geyser",
_hotelDiscount: 
"10",
_hotelImage: 
"https://iili.io/HUUEUNf.jpg",
_hotelName: 
"Park Villa",
_hotelPrice: 
"10",
_hotelStrikeoutPrice: 
"15",
_hotelroomName: 
"Twin Rooms",
  },
  {
    _hotelAmenties1: 
"Free Wifi",
_hotelAmenties2: 
"Complimentary Breakfast",
_hotelDiscount: 
"5",
_hotelImage: 
"https://iili.io/HUpOgdx.jpg",
_hotelName: 
"Sleep Inn",
_hotelPrice: 
"17",
_hotelStrikeoutPrice: 
"10",
_hotelroomName: 
"Deluxe Room",
  },
])
);
}

//Resort Details
const resortDetails = JSON.parse(localStorage.getItem("resortDetails"));

if(!resortDetails) {localStorage.setItem("resortDetails", JSON.stringify([
  {
    _resortAmenties1: 
    "Free Wifi and one Extra bed",
    _resortAmenties2: 
    "Shettle service",
    _resortDiscount: 
    "5",
    _resortImage: 
    "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    _resortName: 
    "Sun and Sand",
    _resortPrice: 
    "25",
    _resortStrikeoutPrice: 
    "20",
    _resortroomName: 
    "Resort",
  },
]))}