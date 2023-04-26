const validation = {
    name: /^[a-zA-Z\s]{3,40}$/,
    lastname: /^[a-zA-Z\s]{3,40}$/,
    id: /^[0-9\s]{7,8}$/,
	password: /^[a-zA-Z0-9]{8,40}$/, 
    password2: /^[a-zA-Z0-9]{8,40}$/,
    phone: /^[0-9\s]{7,8}$/,
	
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

//Email validation
const emailsField = document.querySelector("[name=emails]")
const validationLogin = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[a-zA-Z 0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    if(fieldValue.trim().length > 4 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Please enter a valid email address";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
emailsField.addEventListener("input", validationLogin);
//Password validation
const passwordField = document.querySelector("[name=password]")
const validationPassword = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[a-zA-Z0-9]{8,}$/);
    if(fieldValue.trim().length > 0 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "The password has to have more than 8 characters and letters and numbers only";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
passwordField.addEventListener("input", validationPassword);
//Repeat Password validation
const reppasswordField = document.querySelector("[name=reppassword]")
const validationReppassword = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[a-zA-Z0-9]{8,}$/);
    if(fieldValue.trim().length > 0 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "The password has to have more than 8 characters and letters and numbers only";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
reppasswordField.addEventListener("input", validationReppassword);