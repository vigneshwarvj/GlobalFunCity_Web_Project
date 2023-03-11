const create = e => {
    let first_name = document.getElementById("first_name") .value
    let middle_name = document.getElementById("middle_name") .value
    let last_name = document.getElementById("last_name") .value
    let email = document.getElementById("email") .value
    let password = document.getElementById("password") .value
    let re_enter_password = document.getElementById("re_enter_password") .value
    let date = document.getElementById("date") .value
    let user_uniqueId = uuidv4()
    let mobile_number= "";
    let home_mobile_number="";
    
    // Parshing the JSON
    let user_list = JSON.parse(localStorage.getItem('user_list')) || [];
    let exist = user_list.length &&
        JSON.parse(localStorage.getItem('user_list')).some(data =>
        data.email.toLowerCase() == email.toLowerCase() );
    
    if(!exist){
        if(password == re_enter_password) {
            user_list.push({"first_name":first_name,
            "middle_name":middle_name, 
            "last_name":last_name,
            "email": email,
            "password": password,
            "re_enter_password": re_enter_password,
            "date": date,
            "mobile_number":mobile_number,
            "home_mobile_number":home_mobile_number,
            user_uniqueId
            });
            
            localStorage.setItem('user_list' , JSON.stringify(user_list));
            
            console.log(localStorage.getItem('user_list'));
            document.querySelector('form').reset();
            document.getElementById('email').focus();
            
            alert('Account Created Successfully..')
            location.href="../signup for booking/signup.html";
        }
        else{
            alert("Invalid Password")
        }
       
    }
    
    else{
        alert('Oops! Something went wrong. Your email is already exist');
        document.querySelector('form').reset();
    }
    e.preventDefault();
    
    }
    