const root = window.location.origin;

// Default Header for the user
const defaultHeader = `<div class="visit-signin">

<div class="visit-global">
	<p>	Visit globalfuncity</p>
</div>	

<div class="sign-in">
	<p><a href="${root}/pages/signup for booking/signup.html" id="loginUser"> Sign In </a> | <a href="${root}/pages/signup for booking/create-an-account.html"> Create Account</a>  | <i class="fa-solid fa-globe"></i> United states (English)</p>
</div>

</div>`;

// Taking the User unique id from localstorage for giving the name in user page.
const loggedInUser = JSON.parse(localStorage.getItem("unique_id"));
const user_list = JSON.parse(localStorage.getItem("user_list"));
const person_data = user_list.find((details) => details.email === loggedInUser);


// Header for the user (logged in)
const registeredHeader = `<div class="visit-signin">

<div class="visit-global">
	<p>	Visit globalfuncity</p>
</div>	

<div class="sign-in">
	<p><a href="${root}/pages/homepage/main.profile.html"> Welcome, ${findStatus()} ! </a>&nbsp; | <a href="#" id="logOut"> Sign Out</a>  | <i class="fa-solid fa-globe"></i> United states (English)</p>
</div>

</div>
`;
// Function for getting the name of the user.
function findStatus() {
  if (loggedInUser) {
    return person_data.first_name;
  }
}

// Logged in user header
if (loggedInUser) {
  document.body.insertAdjacentHTML("afterbegin", registeredHeader);

  const logout = document.getElementById("logOut");
  logout.addEventListener("click", () => {
    if (confirm("Are you sure you want to sign out?")) {
      localStorage.removeItem("unique_id");
      localStorage.removeItem("userStatus");
      document.body.innerHTML = defaultHeader;
      window.location.href = "../../index.html";
    }
  });
}
// Get back to index.html
else {
  document.body.insertAdjacentHTML("afterbegin", defaultHeader);
}
