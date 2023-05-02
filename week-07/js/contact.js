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
//Description validation
var descriptionField = document.querySelector("[name=description]")
var validationDescription = e => {
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
descriptionField.addEventListener("input", validationDescription);
//SUBMIT VALIDATION
var submitBtn = document.querySelector("[type=submit]");
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    var nameValue = nameField.value.trim();
    var lastNameValue = lastNameField.value.trim();
    var descriptionValue = descriptionField.value.trim();
    var emailsValue = emailsField.value.trim();
    if (
        nameValue &&
        lastNameValue &&
        descriptionValue &&
        emailsValue
    ) {
        var message =
            "Name: " +
            nameValue +
            "\n" +
            "Last Name: " +
            lastNameValue +
            "\n" +
            "Description: " +
            descriptionValue +
            "\n" +
            "Email: " +
            emailsValue;
        alert(message);
    } else {
        alert("Please fill in all fields");
    }
});
