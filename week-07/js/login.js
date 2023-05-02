// EMAIL
var emailInput = document.getElementById('mail');
var invalidEmail = document.getElementById('invalid-mail');
function emailValidation(email) {
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    return emailExpression.test(email);
}
emailInput.addEventListener('blur', function() {
    if (!emailValidation(emailInput.value)) {
        emailInput.classList.add('login-item-incorrect');
        invalidEmail.classList.remove('hide-class');
    } else {
        emailInput.classList.remove('login-item-incorrect');
        invalidEmail.classList.add('hide-class');
    }
});
// PASSWORD
var passwordInput = document.getElementById('password2');
var invalidPassword = document.getElementById('invalid-password2');
function passwordValidation(password) {
    if (password.length >= 8) {
        let hasNumber = false;
        let hasLetter = false;
        for (let i = 0; i < password.length; i++) {
            if (!isNaN(password.charAt(i))) {
                hasNumber = true;
            } else if (password.charAt(i).match(/[a-z]/i)) {
                hasLetter = true;
            }
            if (hasNumber && hasLetter) {
                return true;
            }
        }
    }
    return false;
}
passwordInput.addEventListener('blur', function() {
    if (!passwordValidation(passwordInput.value)) {
        passwordInput.classList.add('login-item-incorrect');
        invalidPassword.classList.remove('hide-class');
    } else {
        passwordInput.classList.remove('login-item-incorrect');
        invalidPassword.classList.add('hide-class');
    }
});
// VALIDATIONS
function fieldsValidation(email, password) {
    if (!emailValidation(email)) {
        emailInput.classList.add('login-item-incorrect');
        invalidEmail.classList.remove('hide-class');
    } else {
        emailInput.classList.remove('login-item-incorrect');
        invalidEmail.classList.add('hide-class');
    }
    if (!passwordValidation(password)) {
        passwordInput.classList.add('login-item-incorrect');
        invalidPassword.classList.remove('hide-class');
    } else {
        passwordInput.classList.remove('login-item-incorrect');
        invalidPassword.classList.add('hide-class');
    }
}
// SUBMIT + FETCH
var submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    var email = emailInput.value;
    var password = passwordInput.value;
    var url = `https://api-rest-server.vercel.app/login?email=${email}&password=${password}`;
    if (passwordValidation(password) && emailValidation(email)) {
        fetch(url)
            .then(function(response) {
                return response.json();
                })
            .then(function(data) {
                if(data.success){
                alert(`You are logged. Data Reicive:\n${JSON.stringify(data)}`);
                }else if(!data.success){
                throw new Error(JSON.stringify(data))
                }
            })
            .catch(function(error) {
                alert(`It was an error. Error: ${error}`);
            });
    } else {
        fieldsValidation(email, password);
    }
});
