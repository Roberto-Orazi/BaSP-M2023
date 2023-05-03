window.addEventListener("load", () => {
var nameField = document.querySelector("[name=name]")
var validationName = field => {
    var fieldValue = field.value;
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
nameField.addEventListener("input", (e) => validationName(e.target));

var lastNameField = document.querySelector("[name=lastname]")
var validationLastName = field => {
    var fieldValue = field.value;
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
lastNameField.addEventListener("input", (e) => validationLastName(e.target));

var dniField = document.querySelector("[name=dni]")
var validationDni = field => {
    var fieldValue = field.value;
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
dniField.addEventListener("input", (e) => validationDni(e.target));

var phoneField = document.querySelector("[name=phone]")
var validationPhone = field => {
    var fieldValue = field.value;
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
phoneField.addEventListener("input", (e) => validationPhone(e.target));

var addressField = document.querySelector("[name=address]")
var validationAddress = field => {
    var fieldValue = field.value;
    if (fieldValue.trim().length <= 3 || fieldValue.match(/[^a-zA-Z0-9]/)) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Invalid Address";
    }
    else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
        //alert(fieldValue);
    }
}
addressField.addEventListener("input", (e) => validationAddress(e.target));

var cityField = document.querySelector("[name=city]")
var validationCity = field => {
    var fieldValue = field.value;
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
cityField.addEventListener("input", (e) => validationCity(e.target));

var zipCodeField = document.querySelector("[name=zipcode]")
var validationZipCode = field => {
    var fieldValue = field.value;
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
zipCodeField.addEventListener("input", (e) => validationZipCode(e.target));

var emailsField = document.querySelector("[name=emails]")
var validationLogin = field => {
    var fieldValue = field.value;
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
emailsField.addEventListener("input", (e) => validationLogin(e.target));


var passwordField = document.querySelector("[name=password]")
var validationPassword = field => {
    var fieldValue = field.value;
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
passwordField.addEventListener("input", (e) => validationPassword(e.target));

var reppasswordField = document.querySelector("[name=reppassword]")
var validationReppassword = field => {
    var fieldValue = field.value;
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
reppasswordField.addEventListener("input", (e) => validationReppassword(e.target));

var dobField = document.querySelector("[name=dob]")
   


var submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    var url =
        "https://api-rest-server.vercel.app/signup?" +
        "name=" +
        nameField.value +
        "&lastName=" +
        lastNameField.value +
        "&dni=" +
        dniField.value +
        "&dob"+
        dobField.value +
        "&phone=" +
        phoneField.value +
        "&address=" +
        addressField.value +
        "&zip=" +
        zipCodeField.value +
        "&city=" +
        cityField.value +
        "&email=" +
        emailsField.value +
        "&password=" +
        passwordField.value;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.success) {  
                localStorage.setItem("name", nameField.value);
                localStorage.setItem("lastName", lastNameField.value);
                localStorage.setItem("address", addressField.value);
                localStorage.setItem("zip", zipCodeField.value);
                localStorage.setItem("phone", phoneField.value);
                localStorage.setItem("dni", dniField.value);
                localStorage.setItem("dob", dobField.value);
                localStorage.setItem("city", cityField.value);
                localStorage.setItem("email", emailsField.value);
                localStorage.setItem("password", passwordField.value);
                return alert(data.msg);
            }
            if(data.error){
                var errorsFetch;
                for(var i = 0; i < data.errors.length; i++){
                    "The " + 
                    data.errors[i].param +
                    ": " +
                    data.errors[i].value; +
                    "\n has this error: " +
                    data.errors[i].msg;  
                }
                throw new Error(errorsFetch);
            }
        })
        .catch(function(error) {
            alert(error);
        });
        
        getInfo();
        
        function getInfo() {
            nameField.value = localStorage.getItem("name");
            lastNameField.value = localStorage.getItem("lastName");
            addressField.value = localStorage.getItem("address");
            zipCodeField.value = localStorage.getItem("zip");
            phoneField.value = localStorage.getItem("phone");
            dniField.value = localStorage.getItem("dni");
            dobField.value = localStorage.getItem("dob");
            cityField.value = localStorage.getItem("city");
            emailsField.value = localStorage.getItem("email");
            passwordField.value = localStorage.getItem("password");
            reppasswordField.value = localStorage.getItem("password");
        }

})
})
