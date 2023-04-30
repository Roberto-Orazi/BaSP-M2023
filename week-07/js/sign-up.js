//Name validation
var nameField = document.querySelector("[name=name]")
var validationName = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 3) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Name";
    }
    else {
        let invalid = false;
        for (let i = 0; i < fieldValue.length; i++) {
            if (!(fieldValue.charCodeAt(i) >= 65 && fieldValue.charCodeAt(i) <= 90) && !(fieldValue.charCodeAt(i) >= 97 && fieldValue.charCodeAt(i) <= 122) && fieldValue.charCodeAt(i) !== 32) {
                invalid = true;
                break;
            }
        }
        if (invalid) {
            field.classList.add("invalid")
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = "Invalid Name";
        }
        else {
            field.classList.remove("invalid")
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = "";
            //alert(fieldValue);
        }
    }
}
nameField.addEventListener("input", validationName);
//Last Name validation
var lastNameField = document.querySelector("[name=lastname]")
var validationLastName = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 3) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Last Name";
    }
    else {
        let invalid = false;
        for (let i = 0; i < fieldValue.length; i++) {
            if (!(fieldValue.charCodeAt(i) >= 65 && fieldValue.charCodeAt(i) <= 90) && !(fieldValue.charCodeAt(i) >= 97 && fieldValue.charCodeAt(i) <= 122) && fieldValue.charCodeAt(i) !== 32) {
                invalid = true;
                break;
            }
        }
        if (invalid) {
            field.classList.add("invalid")
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = "Invalid Last Name";
        }
        else {
            field.classList.remove("invalid")
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = "";
            //alert(fieldValue);
        }
    }
}
lastNameField.addEventListener("input", validationLastName);
//DNI validation
var dniField = document.querySelector("[name=dni]")
var validationDni = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 7) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Document";
    }
    else {
        let invalid = false;
        for (let i = 0; i < fieldValue.length; i++) {
            if (!(fieldValue.charCodeAt(i) >= 48 && fieldValue.charCodeAt(i) <= 57)) {
                invalid = true;
                break;
            }
        }
        if (invalid) {
            field.classList.add("invalid")
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = "Invalid Document";
        }
        else {
            field.classList.remove("invalid")
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = "";
            //alert(fieldValue);
        }
    }
}
dniField.addEventListener("input", validationDni);
//PHONE validation
var
    phoneField = document.querySelector("[name=phone]")
var validationPhone = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 6) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Phone Number";
    }
    else {
        let invalid = false;
        for (let i = 0; i < fieldValue.length; i++) {
            if (!(fieldValue.charCodeAt(i) >= 48 && fieldValue.charCodeAt(i) <= 57)) {
                invalid = true;
                break;
            }
        }
        if (invalid) {
            field.classList.add("invalid")
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = "Invalid Phone Number";
        }
        else {
            field.classList.remove("invalid")
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = "";
            //alert(fieldValue);
        }
    }
}
phoneField.addEventListener("input", validationPhone);
//Address validation
var addressField = document.querySelector("[name=address]")
var validationAddress = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 3 || fieldValue.match(/[^a-zA-Z0-9]/)) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid City";
    }
    else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        //alert(fieldValue);
    }
}
addressField.addEventListener("input", validationAddress);
//City validation
var cityField = document.querySelector("[name=city]")
var validationCity = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 3 || fieldValue.match(/[^a-zA-Z\s]/)) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid City";
    }
    else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        //alert(fieldValue);
    }
}
cityField.addEventListener("input", validationCity);
//Zip validation
var zipCodeField = document.querySelector("[name=zipcode]")
var validationZipCode = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 4 || fieldValue.match(/[^0-9]/)) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Zip Code";
    }
    else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        //alert(fieldValue);
    }
}
zipCodeField.addEventListener("input", validationZipCode);
//Email validation
var emailsField = document.querySelector("[name=emails]")
var validationLogin = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 4 || !fieldValue.includes("@") || !fieldValue.includes(".")) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Email";
    }
    else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        //alert(fieldValue);
    }
}
emailsField.addEventListener("input", validationLogin);
//Password validation
var passwordField = document.querySelector("[name=password]")
var validationPassword = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 8 || fieldValue.match(/[^a-zA-Z0-9]/)) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Password";
    }
    else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        //alert(fieldValue);
    }
}
passwordField.addEventListener("input", validationPassword);
//Repeat Password validation
var reppasswordField = document.querySelector("[name=reppassword]")
var validationReppassword = e => {
    var field = e.target;
    var fieldValue = e.currentTarget.value;
    if (fieldValue.trim().length <= 8 || fieldValue.match(/[^a-zA-Z0-9]/)) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Password";
    }
    else {
        var passwordField = document.querySelector("[name=password]");
        var passwordValue = passwordField.value;
        if (fieldValue !== passwordValue) {
            field.classList.add("invalid");
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = "Passwords do not match";
        }
        else {
            field.classList.remove("invalid");
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = "";
            //alert(fieldValue);
        }
    }
}
reppasswordField.addEventListener("input", validationReppassword);
//SUBMIT VALIDATION
var submitBtn = document.querySelector("[type=submit]");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    var nameValue = nameField.value.trim();
    var lastNameValue = lastNameField.value.trim();
    var dniValue = dniField.value.trim();
    var phoneValue = phoneField.value.trim();
    var addressValue = addressField.value.trim();
    var cityValue = cityField.value.trim();
    var zipCodeValue = zipCodeField.value.trim();
    var emailValue = emailsField.value.trim();
    var passwordValue = passwordField.value.trim();
    if (
        nameValue &&
        lastNameValue &&
        dniValue &&
        phoneValue &&
        addressValue &&
        cityValue &&
        zipCodeValue &&
        emailsField &&
        passwordValue
    ) {
        var message =
            "Name: " +
            nameValue +
            "\n" +
            "Last Name: " +
            lastNameValue +
            "\n" +
            "DNI: " +
            dniValue +
            "\n" +
            "Phone: " +
            phoneValue +
            "\n" +
            "Address: " +
            addressValue +
            "\n" +
            "City: " +
            cityValue;
            "Zip Code: " +
            zipCodeValue +
            "\n" +
            "Email: " +
            emailsField +
            "\n" +
            "Password: " +
            passwordValue;
        alert(message);
    } else {
        alert("Please fill in all fields");
    }
});
