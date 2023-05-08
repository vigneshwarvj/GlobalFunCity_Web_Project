class User{
    first_name
    middle_name
    last_name
    email
    password

    validateFirstName(first_name){
        const pattern = new RegExp (/[A-Za-z]/)
        return pattern.test(first_name)
    }

    validateMiddleName(middle_name){
        const pattern = new RegExp (/[A-Za-z]/)
        return pattern.test(middle_name)
    }

    validateLastName(last_name){
        const pattern = new RegExp (/[A-Za-z]/)
        return pattern.test(last_name)
    }

    validateEmail(email){
        const pattern = new RegExp (/[]/)
        return pattern.test(email)
    }

    validatePassword(password){
        const pattern = new RegExp (/[]]/)
        return pattern.test(password)
    }

}


const $first_name = "Surya"
const $middle_name = "Sur"
const $last_name = "Umapathy"
const $email = "surya@gmail.com"
const $phoneNumber = "9876543211"
const $password = "sladfkjlasdfgh"


const user = new User();
if (user.validateFirstName($first_name)) {
    console.log("First Name is Valid")
} else {
    console.log("First Name is Not Valid")
}

if(user.validateMiddleName($middle_name)){
    console.log("Middle Name is Valid")
} else {
    console.log("Middle Name is not Valid");
}

if (user.validateLastName($last_name)) {
    console.log("Last Name is Valid")
} else {
    console.log("Last Name is Not Valid")
}

if (user.validateEmail($email)) {
    console.log("Email is Valid")
} else {
    console.log("Email is Not Valid")
}

if (user.validatePassword($password)) {
    console.log("Password is Valid")
} else {
    console.log("Password is Not Valid")
}

