//EMAIL
const emailInput = document.getElementById('mail');
const invalidEmail = document.getElementById('invalid-mail');
function emailValidation(email) {
    const emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
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
//PASSWORD
const passwordInput = document.getElementById('password2');
const invalidPassword = document.getElementById('invalid-password2');
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
//VALIDATIONS
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
//SUBMIT
const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (passwordValidation(passwordInput.value) && emailValidation(emailInput.value)) {
        alert('Email: ' + emailInput.value + '\nPassword: ' + passwordInput.value);
    } else {
        fieldsValidation(emailInput.value, passwordInput.value);
    }
});
