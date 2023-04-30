const create = (e) => {
  const first_name = document.getElementById("first_name").value;
  const middle_name = document.getElementById("middle_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const re_enter_password = document.getElementById("re_enter_password").value;
  const user_uniqueId = uuidv4();
  const mobile_number = "";
  const home_mobile_number = "";

  // Parshing the JSON
  const user_list = JSON.parse(localStorage.getItem("user_list")) || [];
  const exist =
    user_list.length &&
    JSON.parse(localStorage.getItem("user_list")).some(
      (data) => data.email.toLowerCase() == email.toLowerCase()
    );

  if (!exist) {
    if (password == re_enter_password) {
      user_list.push({
        first_name,
        middle_name,
        last_name,
        email,
        password,
        re_enter_password,
        mobile_number,
        home_mobile_number,
        user_uniqueId,
      });

      localStorage.setItem("user_list", JSON.stringify(user_list));

      console.log(localStorage.getItem("user_list"));
      document.querySelector("form").reset();
      document.getElementById("email").focus();

      alert("Account Created Successfully..");
      location.href = "../signup for booking/signup.html";
    } else {
      alert("Invalid Password");
    }
  } else {
    alert("Oops! Something went wrong. Your email is already exist");
    document.querySelector("form").reset();
  }
  e.preventDefault();
};
