//Name validation
const nameField = document.querySelector("[name=name]")
const validationName = e => {
const field = e.target;
const fieldValue = e.currentTarget.value;
if (fieldValue.trim().length <= 3 || !/^[a-zA-Z\s]+$/.test(fieldValue)) {
field.classList.add("invalid");
field.nextElementSibling.classList.add("error");
field.nextElementSibling.innerText = "Please enter a valid Name with more than 3 characters and only letters";
} else {
field.classList.remove("invalid");
field.nextElementSibling.classList.remove("error");
field.nextElementSibling.innerText = "";
}
}
nameField.addEventListener("input", validationName);

//LastName validation
const lastNameField = document.querySelector("[name=lastname]")
const validationLastName = e => {
const field = e.target;
const fieldValue = e.currentTarget.value;
if (fieldValue.trim().length <= 3 || !/^[a-zA-Z\s]+$/.test(fieldValue)) {
field.classList.add("invalid");
field.nextElementSibling.classList.add("error");
field.nextElementSibling.innerText = "Please enter a valid Last Name with more than 3 characters and only letters";
} else {
field.classList.remove("invalid");
field.nextElementSibling.classList.remove("error");
field.nextElementSibling.innerText = "";
}
}
lastNameField.addEventListener("input", validationLastName);

//Email validation
const emailsField = document.querySelector("[name=emails]")
const validationLogin = e => {
const field = e.target;
const fieldValue = e.currentTarget.value;
if (fieldValue.trim().length <= 4 || !/^[^@]+@[^@]+.[a-zA-Z]{2,}$/.test(fieldValue)) {
field.classList.add("invalid");
field.nextElementSibling.classList.add("error");
field.nextElementSibling.innerText = "Please enter a valid email address";
} else {
field.classList.remove("invalid");
field.nextElementSibling.classList.remove("error");
field.nextElementSibling.innerText = "";
}
}
emailsField.addEventListener("input", validationLogin);

//Description validation
const descriptionField = document.querySelector("[name=description]")
const validationdescription = e => {
const field = e.target;
const fieldValue = e.currentTarget.value;
if (fieldValue.trim().length <= 3 || !/^[a-zA-Z0-9]+$/.test(fieldValue)) {
field.classList.add("invalid");
field.nextElementSibling.classList.add("error");
field.nextElementSibling.innerText = "Please enter a valid description with more than 3 characters and only letters and numbers";
} else {
field.classList.remove("invalid");
field.nextElementSibling.classList.remove("error");
field.nextElementSibling.innerText = "";
}
}
descriptionField.addEventListener("input", validationdescription);
