function profile() {
  // Create a new anchor element
  const unique_id = JSON.parse(localStorage.getItem("unique_id"));
  const user_list = JSON.parse(localStorage.getItem("user_list"));

  function profile_data(e) {
    return e.email == unique_id;
  }
  person_data = user_list.find(profile_data);

  const anchor = document.createElement("a");

  // Set the href attribute
  anchor.setAttribute("href", "../../pages/homepage/main.profile.html");
  // console.log(anchor)
  // Create a new i element
  const icon = document.createElement("i");

  // Set the class attribute for the i element
  icon.setAttribute("class", "fa-solid fa-user");

  // Append the i element to the anchor element
  anchor.appendChild(icon);

  // Add a whitespace character to the anchor element
  const whitespace = document.createTextNode("\u00A0");
  anchor.appendChild(whitespace);

  const text = "Hi" + ` ${person_data.first_name} ` + "!";
  anchor.append(text);

  // Append the anchor element to the desired parent element
  const parentElement = document.getElementById("#sign-in");

  document.querySelector("#sign-in").prepend(anchor);
}
const userStatus = localStorage.getItem("userStatus");
console.log(userStatus);

if (userStatus == "login") {
  profile();
} else {
  const anchor = document.createElement("a");

  // Set the href attribute
  anchor.setAttribute("href", "../../pages/signup for booking/signup.html");
  console.log(anchor);
  // Create a new i element
  const icon = document.createElement("i");

  // Set the class attribute for the i element
  icon.setAttribute("class", "fa-solid fa-user");

  // Append the i element to the anchor element
  anchor.appendChild(icon);

  // Add a whitespace character to the anchor element
  const whitespace = document.createTextNode("\u00A0");
  anchor.appendChild(whitespace);

  const text = "Sign In | Sign Up";
  anchor.append(text);

  // Append the anchor element to the desired parent element
  const parentElement = document.getElementById("#sign-in");
  document.querySelector("#sign-in").prepend(anchor);
}
