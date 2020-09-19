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
    else if(validateAcc(username, password)) {
        location.replace("index.html");
    }
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