const emailField = document.querySelector("[name=email]")
const validation = e =>{
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
emailField.addEventListener("input", validation);




