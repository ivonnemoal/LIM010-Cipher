/* Acá va tu código */

const result = document.getElementById('result');
const btnLogin = document.getElementById('btn');
let counter = 2;

// funcion de ingreso
const validatePassword = btnLogin.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    document.getElementById('name').value = '';

    const password = document.getElementById('password').value;
    document.getElementById('password').value = '';

    if (counter > 0) {
        counter--;
        if (password === 'LABORATORIA') {
            result.innerHTML = 'WELCOME' + ' ' + name;
        }else {
            result.innerHTML = 'incorrect password try again';}
    }else {
        result.innerHTML = '¡WE ARE SORRY BUT YOU CAN NOT ENTER FOR NOW!';}
});