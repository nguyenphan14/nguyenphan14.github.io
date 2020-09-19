const signUp = document.getElementById('sign-up');
const username = document.getElementById('username');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('cf-password');
const userHelp = document.getElementById('userHelp');
const phoneHelp = document.getElementById('phoneHelp');
const passwordHelp = document.getElementById('passwordHelp');
const confirmPasswordHelp = document.getElementById('confirmPasswordHelp');

username.addEventListener('keyup', (e) => {
    if(e.target.value === 'admin') {
        userHelp.textContent = 'Can\'t use this username';
        signUp.disabled = true;
    } else {
        let res = account.user.find((user) => {
            return user.username === e.target.value;
        });
        if(!(res === undefined)) {
            userHelp.textContent = 'This username already exists';
            signUp.disabled = true;
        } else {
            userHelp.textContent = '';
            signUp.disabled = false;
        }
    }
})

phone.addEventListener('keyup', (e) => {
    let res = account.user.find((user) => {
        return user.phone === e.target.value;
    });
    if(!(res === undefined)) {
        phoneHelp.textContent = 'This number phone is already registered';
        signUp.disabled = true;
    } else {
        phoneHelp.textContent = '';
        signUp.disabled = false;
    }
})

signUp.addEventListener('click', () => {
    if(validateUsername(username) && validatePhone(phone) && validatePwd(password) && validateCfpwd(confirmPassword)) {
        account.user.push({
            "username": username.value,
            "phone": phone.value,
            "password": password.value
        })
        signUp.disabled = true;
        
    }
})

function validateUsername(username) {
    if(username.value === '') {
        userHelp.textContent = 'Fill this field';
        return false
        
    } else {
        userHelp.textContent = '';   
        return true
    }
}

function validatePhone(numberPhone) {
    if(numberPhone.value === '') {
        phoneHelp.textContent = 'Fill this field';
        return false
    } else {
        phoneHelp.textContent = '';
        return true
    }
}

function validatePwd(password) {
    if(password.value === '') {
        passwordHelp.textContent = 'Fill this field';
        return false
    } else {
        passwordHelp.textContent = '';
        return true
    }
}

function validateCfpwd(confirmPassword) {
    if(confirmPassword.value === '') {
        confirmPasswordHelp.textContent = 'Fill this field';
        return false
    } else {
        if(!(confirmPassword.value === password.value)) {
            confirmPasswordHelp.textContent = "Your password and confirmation password do not match";
            return false
        }
        else {
            confirmPasswordHelp.textContent = "";
            return true
        }
    }
}
