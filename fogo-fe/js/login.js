const loginBtn = document.getElementById('login');
const username = document.getElementById('username');
const password = document.getElementById('password');
const userHelp = document.getElementById('userHelp');
const pwdHelp = document.getElementById('pwdHelp');

loginBtn.addEventListener('click', () => {
    if(username.value === account.admin.username && password.value === account.admin.password) {
        /* execute with admin*/
        console.log('Admin is signed');
    }
    /* else if(validateAcc(username, password)) {
        console.log('User signed');
        
    } */
    let testObj = [
        {
            'name': 'Nuguyen',
            'age': '19'
        }, 
        {
            'name': 'Dung',
            'age': '18'
        }
    ]
    console.log(
        testObj.map((user) => {
            return JSON.stringify(user)
        }).toString()
    )
})

function validateAcc(username, password) {
    let res = account.user.find((user) => {
        return user.username === username.value;
    })
    if(res.password === password.value) {
        return true
    } else {
        pwdHelp.textContent = "Incorrect password"
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
        account.user.push({
            "username": usernameReg.value,
            "phone": phone.value,
            "password": passwordReg.value
        })
        signUp.disabled = true;
        
    }
})

function validateUsername(username) {
    if(username.value === '') {
        userRegHelp.textContent = 'Fill this field';
        return false
        
    } else {
        userRegHelp.textContent = '';   
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


/* Direct (Login / Register) page */
const loginPage = document.getElementById('login-page')
const regPage = document.getElementById('register-page')
document.getElementById('sign-up-link').addEventListener('click', (eve) => {
    loginPage.style.display = 'none';
    regPage.style.display = 'block';
})

document.getElementById('sign-in-link').addEventListener('click', (eve) => {
    loginPage.style.display = 'block';
    regPage.style.display = 'none';
})
