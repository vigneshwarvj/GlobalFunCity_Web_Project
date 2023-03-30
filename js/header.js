const root = window.location.origin

const defaultHeader =`<div class="visit-signin">

<div class="visit-global">
	<p>	Visit globalfuncity.com</p>
</div>	

<div class="sign-in">
	<p><a href="${root}/pages/signup for booking/signup.html" id="loginUser"> Sign In </a> | <a href="./pages/signup for booking/create-an-account.html"> Create Account</a>  | <i class="fa-solid fa-globe"></i> United states (English)</p>
</div>

</div>`

let unique_id = JSON.parse(localStorage.getItem("unique_id"));
let user_list = JSON.parse(localStorage.getItem("user_list"));
const person_data = user_list.find(details => details.email == unique_id);

const registeredHeader = `<div class="visit-signin">

<div class="visit-global">
	<p>	Visit global1.com</p>
</div>	

<div class="sign-in">
    
	<p><a href="${root}/pages/homepage/main.profile.html"> Welcome, Tommy ! </a>&nbsp; | <a href="../../index.html" id ="logOut"> Sign Out</a>  | <i class="fa-solid fa-globe"></i> United states (English)</p>
</div>

</div>`



const loggedInUser = localStorage.getItem("unique_id");

console.log(loggedInUser)
if(loggedInUser) {
    document.body.insertAdjacentHTML("afterbegin", registeredHeader);

    const logout = document.getElementById("logOut");
    logout?.addEventListener("click", ()=>{
        localStorage.removeItem("unique_id");
        document.body.innerHTML = defaultHeader;

    });
    
    
} else{
    document.body.insertAdjacentHTML("afterbegin", defaultHeader);

    const logout = document.getElementById("logOut");
    logout?.addEventListener("click", ()=> document.body.insertAdjacentHTML("afterbegin", registeredHeader));
    localStorage.removeItem("unique_id");
}

// let sentence = "Nanda drinks coffee than tea.";
// let newSentence = sentence.replace("cofee", "tea");
// console.log(sentence);