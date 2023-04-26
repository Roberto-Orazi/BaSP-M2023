//Name validation
const nameField = document.querySelector("[name=name]")
const validationName = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[a-zA-Z\s]{3,}$/);
    if(fieldValue.trim().length > 3 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Please enter a valid Name with more than 3 characters and only letters";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
nameField.addEventListener("input", validationName);
//LastName validation
const lastNameField = document.querySelector("[name=lastname]")
const validationLastName = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[a-zA-Z\s]{3,}$/);
    if(fieldValue.trim().length > 3 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Please enter a valid Last Name with more than 3 characters and only letters";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
lastNameField.addEventListener("input", validationLastName);
//DNI validation
const dniField = document.querySelector("[name=dni]")
const validationDni = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[0-9]{7,}$/);
    if(fieldValue.trim().length > 0 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "The document number has to have more than 7 numbers and numbers only";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
dniField.addEventListener("input", validationDni);
//PHONE validation
const phoneField = document.querySelector("[name=phone]")
const validationPhone = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[0-9\s]{10,}$/);
    if(fieldValue.trim().length > 0 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "The Phone number has to have more than 10 numbers";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
phoneField.addEventListener("input", validationPhone);
//Address validation
const addressField = document.querySelector("[name=address]")
const validationAddress = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[a-zA-Z0-9]{3,}$/);
    if(fieldValue.trim().length > 3 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Please enter a valid city with more than 3 characters and only letters";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
addressField.addEventListener("input", validationAddress);
//City validation
const cityField = document.querySelector("[name=city]")
const validationCity = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[a-zA-Z\s]{3,}$/);
    if(fieldValue.trim().length > 3 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Please enter a valid city with more than 3 characters and only letters";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
cityField.addEventListener("input", validationCity);
//Zip validation
const zipCodeField = document.querySelector("[name=zipcode]")
const validationZipCode = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[0-9]{4,5}$/);
    if(fieldValue.trim().length > 4 && !regex.test(fieldValue)){
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Please enter a valid city with more than 3 characters and only letters";
    }
    else{
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}
zipCodeField.addEventListener("input", validationZipCode);
//Email validation
const emailsField = document.querySelector("[name=emails]")
const validationLogin = e =>{
    const field = e.target;
    const fieldValue  = e.currentTarget.value;
    const regex = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
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

