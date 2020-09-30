const loginBtn = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');
const userHelp = document.getElementById('userHelp');
const pwdHelp = document.getElementById('pwdHelp');
let users = "";

loginBtn.addEventListener('click', () => {
    if(username.value === account.admin.username && password.value === account.admin.password) {
        /* execute with admin*/
        console.log('Admin is signed');
        // location.replace('index.html');
    }
    else if(validateAcc(username, password)) {
        console.log('User signed');
        location.assign('index.html');
    }
})

function validateAcc(username, password) {
    let userList = convertUser(localStorage.user);
    let res = userList.find((user) => {
        return user.username === username.value;
    })
    if(res === undefined) {
        alert('Your username or password may be incorrect!!!');
    } else if (res.password === password.value) {
        pwdHelp.textContent = ""
        return true
    } else {
        alert('Your username or password may be incorrect!!!');
    }
}

/*  Register */

const signUp = document.getElementById('sign-up');
const usernameReg = document.getElementById('username-reg');
const phone = document.getElementById('phone');
const passwordReg = document.getElementById('password-reg');
const confirmPassword = document.getElementById('cf-password');
const userRegHelp = document.getElementById('userRegHelp');
const phoneHelp = document.getElementById('phoneHelp');
const passwordHelp = document.getElementById('passwordHelp');
const confirmPasswordHelp = document.getElementById('confirmPasswordHelp');

usernameReg.addEventListener('keyup', (e) => {
    if(e.target.value === 'admin') {
        userRegHelp.textContent = 'Can\'t use this username';
        signUp.disabled = true;
    } else {
        let res = account.user.find((user) => {
            return user.username === e.target.value;
        });
        if(!(res === undefined)) {
            userRegHelp.textContent = 'This username already exists';
            signUp.disabled = true;
        } else {
            userRegHelp.textContent = '';
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
    
    if(validateUsername(usernameReg) && validatePhone(phone) && validatePwd(passwordReg) && validateCfpwd(confirmPassword)) {
        let userReg = {
            "username": usernameReg.value,
            "phone": phone.value,
            "password": passwordReg.value,
        }
        if(localStorage.user === undefined) {
            users = "";
            users += JSON.stringify(userReg);
        } else {
            users += ',' + JSON.stringify(userReg);
        }
        localStorage.setItem('user', users);     
        location.assign('index.html');
        signUp.disabled = true;   
    }
})

function validateUsername(username) {
    if(username.value === '') {
        userRegHelp.textContent = 'Fill this field';
        return false
    } else {
        if(hasWhiteSpace(username.value)) {
            userRegHelp.textContent = 'Username don\'t use white space';
            return false
        } else if(username.value === 'admin') {
            userRegHelp.textContent = 'Can\'t use this usernames';
            return false
        } else {
            userRegHelp.textContent = '';
            return true
        }
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
        if(!(confirmPassword.value === passwordReg.value)) {
            confirmPasswordHelp.textContent = "Your password and confirmation password do not match";
            return false
        }
        else {
            confirmPasswordHelp.textContent = "";
            return true
        }
    }
}

function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
}

/* Direct (Login / Register) page */
const loginPage = document.getElementById('login-page')
const regPage = document.getElementById('register-page')
document.getElementById('sign-up-link').addEventListener('click', (eve) => {
    loginPage.style.display = 'none';
    regPage.style.display = 'block';
    signUp.disabled = false;
})

document.getElementById('sign-in-link').addEventListener('click', (eve) => {
    loginPage.style.display = 'block';
    regPage.style.display = 'none';
})

/* Convert String Array of Users */

function convertUser(localStorageData) {
    let convertedUsers = localStorageData.split('},');
    for(let i = 0; i < convertedUsers.length-1; i++) {
        convertedUsers[i] += "}";
    }
    return convertedUsers.map((user) => JSON.parse(user));
}

function renderUserData(user) {

}

