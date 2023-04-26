//Email validation
const mailField = document.querySelector("[name=mail]")
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
mailField.addEventListener("input", validationLogin);
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